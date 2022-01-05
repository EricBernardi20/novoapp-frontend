import { PatientsService } from './../patients.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss']
})
export class ModalAddUserComponent implements OnInit {

  resposavel: string = '';
  nomecompleto: string = '';
  nomeuser: string = '';
  email: string = '';
  password: any;
  confirmpassword: any;

  contato: any;

  constructor(private service: PatientsService) { }

  ngOnInit(): void {

    this.contato = {} ; 
  }

  data = {
    password: '',
    password_confirm: '',
  };

  title = 'app';

  criar(frm: FormGroup){
    this.service.criar(this.contato).subscribe(resposta =>{
      this.contato.push(resposta);

      frm.reset()
    })
  }
}


