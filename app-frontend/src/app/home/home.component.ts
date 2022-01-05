import { PatientsService } from './../patients.service';
import { Patient } from './../patients';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() patients: Patient[] = [];
  selectedPatient: Patient = {} as Patient
  hidden: boolean= false;

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  setSelectedPatient(receiverPatient: Patient){
    this.selectedPatient = receiverPatient
  }

  async getPatients(name: string) {
    const listaDePacientes = await this.patientsService.getPatientsByName(name)

    this.patients = listaDePacientes
  }

  onMostraBotao() {
    this.hidden = !this.hidden;
  } 

  async search(title: string) {
    const response = await this.patientsService.getPatientsByName(title)

    this.patients = response
    
  }

}
