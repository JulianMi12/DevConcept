import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuditService } from 'app/services/audit.service'
import { CompanyService } from 'app/services/company.service'

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css'],
})
export class NewCompanyComponent implements OnInit {
  createCompany: FormGroup
  createAudit: FormGroup
  enviado = false
  id: string | null
  titulo: string = 'Add Company'

  constructor(
    private fb: FormBuilder,
    private auditService: AuditService,
    private companyService: CompanyService,
    private router: Router,
    private aRoute: ActivatedRoute,
  ) {
    this.createCompany = this.fb.group({
      NIT: ['', Validators.required],
      name: ['', Validators.required],
    })

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
    this.edit()
  }

  agregarCompany() {
    this.enviado = true

    if (this.createCompany.invalid) {
      return
    }

    if (this.id === null) {
      const company: any = {
        NIT: this.createCompany.value.NIT,
        name: this.createCompany.value.name,
        total: '0'
      }

      this.companyService
        .agregarCompany(company)
        .then(() => {
          console.log('registro exitoso')
          this.router.navigate(['companies'])
        })
        .catch((error) => {
          console.log(error)
        })

        const audit: any = {
          user: 'soporte.dev',
          company: this.createCompany.value.NIT,
          service: 'null',
          date: new Date().toISOString().slice(0, 10),
          action: 'C',
        }
        this.auditService
          .agregarAudit(audit)
          .then(() => {
            console.log('registro exitoso')
          })
          .catch((error) => {
            console.log(error)
          })
    } else {
      const company: any = {
        NIT: this.createCompany.value.NIT,
        name: this.createCompany.value.name
      }
      this.companyService.updateCompany(this.id, company).then(() => {
        console.log('registro actualizado')
      })

      const audit: any = {
        user: 'soporte.dev',
        company: this.createCompany.value.NIT,
        service: 'null',
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
    this.router.navigate(['companies']);
  }

  edit() {
    if (this.id !== null) {
      this.titulo = 'Update Company'
      this.companyService.getCompany(this.id).subscribe((data) => {
        this.createCompany.setValue({
          NIT: data.payload.data()['NIT'],
          name: data.payload.data()['name'],
        })
      })
    } else {
    }
  }
}
