import { Component, OnInit } from '@angular/core';
import { PatientsServiceService } from '../patients-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalInfo } from '../services/PersonalInfo';



@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
patientId:string;
patient:PersonalInfo;
count:number;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId= this.route.snapshot.params["patientId"]
    this.service.getpatient(this.patientId).subscribe(data=>this.patient=data);
  }
  updatePatient(){
    this.service.updatePatient(this.patient).subscribe(data=>this.count=data);
    this.gotopatient();
  }
  gotopatient(){
    alert("updated sucessfully count :"+this.count)
    this.router.navigate(["/onepatient",this.patientId])
  }

}
