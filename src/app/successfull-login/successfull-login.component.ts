import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';

@Component({
  selector: 'app-successfull-login',
  templateUrl: './successfull-login.component.html',
  styleUrls: ['./successfull-login.component.css']
})
export class SuccessfullLoginComponent implements OnInit {
  condition:boolean=false;
  patientId:string =null;
  phoneNumber:any;
  firstName:string=null;
  lastName:string=null;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

 
  ngOnInit(): void {
  }
search(){
  this.condition=true;

}
searchPatientId(){
this.service.searchPatientId(this.firstName,this.lastName,this.phoneNumber).subscribe(arg => this.patientId = arg);
}
}
