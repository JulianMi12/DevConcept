import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
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

  constructor(
    private fb: FormBuilder,
    private auditService: AuditService,
    private companyService: CompanyService,
    private router: Router,
  ) {
    this.createCompany = this.fb.group({
      NIT: ['', Validators.required],
      name: ['', Validators.required]
    })

    this.createAudit = this.fb.group({
      user: ['', Validators.required],
      company: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      action: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  agregarCompany() {
    this.enviado = true

    if (this.createCompany.invalid) {
      return
    }
    const company: any = {
      NIT: this.createCompany.value.NIT,
      name: this.createCompany.value.name,
      total: "0"
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
      service: "null",
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
  }
}
