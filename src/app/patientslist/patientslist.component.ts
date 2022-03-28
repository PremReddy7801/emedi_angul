import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientsServiceService } from '../patients-service.service';
import { PersonalInfo } from '../services/PersonalInfo';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {
patients:PersonalInfo[];
condition :boolean=false;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients(): void{
    this.service.getAllPatients()
    .subscribe( data => this.patients = data );

  }
  goToPatient(patientId:string){

this.router.navigate(["onepatient",patientId])
  }

  addPatient(){
    this.router.navigate(["/addpatient"])
  }

}
