import { Component, OnInit, RendererStyleFlags2 } from '@angular/core'
import { AuthService } from 'app/services/auth.service'

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css', './style2.css'],
})
export class EmailComponentComponent implements OnInit {
  public email: any
  public password: any

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value)
      this.authService.login(formData.value.email, formData.value.password)
    }
  }
}
