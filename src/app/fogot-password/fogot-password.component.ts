import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.component.html',
  styleUrls: ['./fogot-password.component.css']
})
export class FogotPasswordComponent implements OnInit {
gmail:string="";
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  forgotPassword(){
    this.service.forgotPassword(this.gmail).subscribe(data=>data);
    alert("update password link sent to your mail address ")
    this.goToLogin();
  }
  goToLogin(){
    this.router.navigate(["/login"])
  }
}
