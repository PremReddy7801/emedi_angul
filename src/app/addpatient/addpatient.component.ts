import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { PatientsServiceService } from '../patients-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonalInfo } from '../services/PersonalInfo';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  patient: PersonalInfo = new PersonalInfo();
  patien: PersonalInfo = new PersonalInfo(); 
  
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  savePatient() {
    this.service.savePatient(this.patient).subscribe(data => this.patien =data);
    
  
  
  }
  
}
