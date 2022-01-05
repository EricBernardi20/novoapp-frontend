import { RequestLogin, ResponseLogin } from '../../patients';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // criar o metodo da requisição
  async login(requestLogin: RequestLogin) { }

  constructor(private httpClient: HttpClient) {

  }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/login', requestLogin)
  }
}

