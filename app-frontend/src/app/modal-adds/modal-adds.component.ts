import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-addon',
  templateUrl: './modal-adds.component.html',
  styleUrls: ['./modal-adds.component.scss']
})
export class ModalAddsComponent implements OnInit {

  cpf: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
