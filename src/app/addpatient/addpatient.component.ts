import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { PatientsServiceService } from '../patients-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonalInfo } from '../services/PersonalInfo';
import { Visits } from '../services/Visits';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  patient: PersonalInfo = new PersonalInfo();
  patien: PersonalInfo = new PersonalInfo(); 
  visti:Visits= new Visits();
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  savePatient() {
    this.visti.status=this.patient.status;
    this.visti.createdBy=this.patient.createdBy;
    this.visti.updatedBy=this.patient.updatedBy;
    this.patient.visits = [this.visti];
    this.service.savePatient(this.patient).subscribe(data => this.patien =data);
    
  this.goToAllPatients();
  }
  goToAllPatients(){
    this.router.navigate(["/getallpatients"])
  }
}

