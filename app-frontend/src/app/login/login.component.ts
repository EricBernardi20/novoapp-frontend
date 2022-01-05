import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../patients';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.authService.doLogin(this.requestLogin).subscribe((data: any) => {
      console.log(data)
    })
  }




}
