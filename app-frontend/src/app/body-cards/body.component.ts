import { patients, Patient } from './../patients';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-body-cards',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  @Input() public patient: Patient = {} as Patient;

  ngOnInit(): void {
  }

}
