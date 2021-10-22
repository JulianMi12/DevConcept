import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  loginGoogle() {
    this.authService.googleLogin();
  }
}
