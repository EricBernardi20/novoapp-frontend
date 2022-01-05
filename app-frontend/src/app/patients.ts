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
