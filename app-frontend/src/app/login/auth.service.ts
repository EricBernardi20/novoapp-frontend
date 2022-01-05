import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'localhost:4200/login'

  // criar o metodo da requisição
  async login(username:string, password: string) {
    const response = await axios.post(this.url, {
      ds_nome: username,
      ds_senha: password
    })

    return response.data
  }

  constructor() { }
}
