import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-sign-uppage',
  templateUrl: './sign-uppage.component.html',
  styleUrls: ['./sign-uppage.component.css', './style2.css']
})
export class SignUppageComponent implements OnInit {

  public email:any;
  public password:any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData){
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
      );
    }
  }

}
