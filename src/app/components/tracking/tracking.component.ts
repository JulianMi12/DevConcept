import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuditService } from 'app/services/audit.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css', './style2.css']
})
export class TrackingComponent implements OnInit {

  audits: Observable<any[]> | any
  ids: string | null
  createAudit: FormGroup
  titulo: string = 'Update Audit'

  constructor(
    private fb: FormBuilder,
    private auditService: AuditService,
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

    this.ids = this.aRoute.snapshot.paramMap.get('id')
  }


  ngOnInit(): void {
  }

  agregarTracking(){

    if (this.createAudit.invalid) {
      return
    }
    const audit: any = {
      user: "soporte.dev",
      company: this.createAudit.value.NIT,
      service: this.createAudit.value.id,
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
        });
    this.router.navigate(['Audit']);
  }

    edit() {
    if (this.ids !== null) {
      this.auditService.getAudit(this.ids).subscribe((data) => {
        this.createAudit.setValue({
          user: "soporte.dev",
          company: this.createAudit.value.NIT,
          service: this.createAudit.value.id,
          date: new Date().toISOString().slice(0, 10),
          action: 'U',
        })
      })
    } else {
    }
  }

}
