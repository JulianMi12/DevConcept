import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuditService } from 'app/services/audit.service'
import { ServicesService } from 'app/services/services.service'

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css'],
})
export class NewServiceComponent implements OnInit {
  createService: FormGroup
  createAudit: FormGroup
  enviado = false

  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private auditService: AuditService,
    private router: Router,
  ) {
    this.createService = this.fb.group({
      id: ['', Validators.required],
      NIT: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
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

  agregarService() {
    this.enviado = true

    if (this.createService.invalid) {
      return
    }
    const service: any = {
      id: this.createService.value.id,
      NIT: this.createService.value.NIT,
      name: this.createService.value.name,
      date: this.createService.value.date,
    }

    this.servicesService
      .agregarService(service)
      .then(() => {
        console.log('registro exitoso')
        this.router.navigate(['service'])
      })
      .catch((error) => {
        console.log(error)
      })


      const audit: any = {
        user: "soporte.dev",
        company: this.createService.value.NIT,
        service: this.createService.value.id,
        date: new Date().toISOString().slice(0, 10),
        action: "C"
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
