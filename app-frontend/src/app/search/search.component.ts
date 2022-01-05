import { PatientsService } from './../patients.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from './../patients';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  
  hidden: Boolean = false;
  

  @Input() patients: Patient[] = [];
  @Output() onClick= new EventEmitter();
    

  constructor(private patientsService: PatientsService) { }

  onMostraBotao() {
    this.hidden = !this.hidden;
  } 

  async search(title: string) {
    const response = await this.patientsService.getPatientsByName(title)

    this.patients = response
    
  }

}
