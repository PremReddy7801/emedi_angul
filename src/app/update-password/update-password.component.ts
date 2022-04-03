import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  gmail:string="";
  password:string="";
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  updatePassword(){
    this.service.updatePassword(this.gmail,this.password).subscribe(data=>data);
    this.goToLogin();
  }
  goToLogin(){
    this.router.navigate(["/login"])
  }

}
