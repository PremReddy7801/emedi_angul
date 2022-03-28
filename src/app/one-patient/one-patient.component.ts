import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';
import { PersonalInfo } from '../services/PersonalInfo';


@Component({
  selector: 'app-one-patient',
  templateUrl: './one-patient.component.html',
  styleUrls: ['./one-patient.component.css']
})
export class OnePatientComponent implements OnInit {
patientId:string;
patient:PersonalInfo;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId=this.route.snapshot.params["patientId"]
    this.getPatient();
  }
getPatient(){
  console.log("patientId :"+this.patientId);
  
  this.service.getpatient(this.patientId).subscribe(data=>this.patient=data);

}
deletePatient(patientId:string){
  this.router.navigate(["/deletepatient",patientId])
}
updatePatient(patientId:string){
  this.router.navigate(["/updatepatient",patientId])
  
}
goToAllPatients(){
  this.router.navigate(["/getallpatients"])
}

}
