import { Injectable } from '@angular/core';
import axios from 'axios';
import { Patient } from './patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


  private url: string = ``

  constructor() { }

  public async getPatientsByName(name: string) {
    // const response = await Axios.get<patients>(this.url + '&s=' + title)

    const response = [
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },{
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },{
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },{
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },{
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      },
      {
        "status": "Ativo",
        "ds_nome": "Leo",
        "dt_nascimento": "24/05/2002",
        "tipo_sangue": "A+",
        "cpf": "222.333.444-55",
        "id": "01"
      }

      
    ] as Patient[]

    return response
  }


  // public async nextPage(title: string, page: number) {
  //   const response = await Axios.get<Movies>(this.url + '&s=' + title + '&page=' + page)

  //   return response.data
  // }

  public async getPatientsById(id: string) {
    const response = await axios.get<Patient>(this.url + '&i=' + id)

    return response.data

  }
}
