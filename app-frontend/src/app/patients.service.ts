import { Injectable } from '@angular/core';
import axios from 'axios';
import { Patient, patients } from './patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


  private url: string = `http://localhost:8080/oauth/token=?7a5270c3-8067-43c1-b717-946c43d1eceb`

  constructor() { }

  public async getPatientsByName(name: string) {
    const response = await axios.get<patients>(this.url + '&s=' + name)

    // const response = [
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },{
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },{
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },{
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },{
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   },
    //   {
    //     "status": "Ativo",
    //     "ds_nome": "Leo",
    //     "dt_nascimento": "24/05/2002",
    //     "tipo_sangue": "A+",
    //     "cpf": "222.333.444-55",
    //     "id": "01"
    //   }

      
    // ] as Patient[]

    return response.data
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
