import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
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
  ids: string | null
  titulo: string = 'Add Service'

  constructor(
    private fb: FormBuilder,
    private servicesService: ServicesService,
    private auditService: AuditService,
    private router: Router,
    private aRoute: ActivatedRoute,
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
    this.ids = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.edit()
  }

  agregarService() {
    this.enviado = true

    if (this.createService.invalid) {
      return
    }
    if (this.ids === null) {
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
    } else {
      const service: any = {
        id: this.createService.value.id,
        NIT: this.createService.value.NIT,
        name: this.createService.value.name,
        date: this.createService.value.date
      }
      this.servicesService.updateService(this.ids, service).then(() => {
        console.log('registro actualizado')
      })

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
    this.router.navigate(['services']);
  }

  edit() {
    if (this.ids !== null) {
      this.titulo = 'Update Services'
      this.servicesService.getService(this.ids).subscribe((data) => {
        this.createService.setValue({
          id: data.payload.data()['id'],
        NIT: data.payload.data()['NIT'],
        name: data.payload.data()['name'],
        date: data.payload.data()['date'],
        })
      })
    } else {
    }
  }
}

