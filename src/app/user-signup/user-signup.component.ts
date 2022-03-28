import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';
import { FrontDesk } from '../services/FrontDesk';
import { Roles } from '../services/roles';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
frontDesk:FrontDesk = new FrontDesk();
isAccepted = true;
roles:Roles[] =[];
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.roles =[
      {roleId:1,
        name:"ROLE_USER",
        checked :true
      },
      {
        roleId:2,
        name:"ROLE_ADMIN",
        checked :false
      }
    ]
  }
   selectedCheckboxList() {
   return this.roles.filter(item => item.checked);
  }
signUp(){
  this.frontDesk.roles= this.selectedCheckboxList();
  alert("sign in")
  this.service.signUp(this.frontDesk).subscribe(data=>this.frontDesk);
this.goToSignIn();
}
goToSignIn(){
  this.router.navigate(["/login"])
}
}
