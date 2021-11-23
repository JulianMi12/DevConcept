import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuditService } from 'app/services/audit.service'
import { ServicesService } from 'app/services/services.service'

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', './style2.css']
})
export class TrackingComponent implements OnInit {

  audits: Observable<any[]> | any;
  ids: string | null

  constructor(
    private fb: FormBuilder,
    private auditService: AuditService,
    private companyService: CompanyService,
    private router: Router,
    private aRoute: ActivatedRoute,
  ) {

    this.createAudit = this.fb.group({
      user: ['', Validators.required],
      company: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      action: ['', Validators.required],
    })

    this.id = this.aRoute.snapshot.paramMap.get('id')
  }


  ngOnInit(): void {
  }
  agregarTracking(){
    const audit: any = {
        user: "soporte.dev",
        company: this.createService.value.NIT,
        service: this.createService.value.id,
        date: new Date().toISOString().slice(0, 10),
        action: 'U',
      }
      this.auditService
        .agregarAudit(audit)
        .then(() => {
          console.log('registro exitoso')
        })
        .catch((error) => {
          console.log(error)
        })
    };
    this.router.navigate(['Audit']);

  }

    edit() {
    if (this.ids !== null) {
      this.titulo = 'Update Audit'
      this.auditService.getAudit().subscribe((data) => {
        this.createAudit.setValue({
          user: "soporte.dev",
          company: this.createService.value.NIT,
          service: this.createService.value.id,
          date: new Date().toISOString().slice(0, 10),
          action: 'U',
        })
      })
    } else {
    }
  }

}
