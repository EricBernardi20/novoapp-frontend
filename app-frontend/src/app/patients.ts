export interface patients {
  Search: Patient[]
  totalResults: string
  Response: string
}

export interface Patient {
  status: string
  ds_nome: string
  dt_nascimento: string
  tipo_sangue: string
  cpf: string
  id: string
}

export class RequestLogin {
  public ds_nome!: string;
  public ds_senha!: string;
  public ds_email!: string;

}
export class ResponseLogin {
  public access_token!: String;
}
