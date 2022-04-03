import { Component, OnInit } from '@angular/core';
import { PatientsServiceService } from '../patients-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
  patientId:string;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params["patientId"];
    this.service.deletePatient(this.patientId).subscribe(data=>data);
    alert("patient deleted successfully")
    this.goToAllPatients();
  }
  goToAllPatients(){
    this.router.navigate(["/getallpatients"])
  }
}
