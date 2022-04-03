import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username:string="";
  password:string="";
  token:string ="";
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  login(){
    console.log(this.username,this.password);
    
    this.service.login(this.username,this.password).subscribe(data=>{
      console.log("dataaaaaaaa :"+data.accessToken)
       this.token = data.accessToken;
    });
    
    if(this.token.length<2){
      // this.successfullLogin();
      // this.successfullLogin();
      this.router.navigate(["/login"])
    }else {
    this.router.navigate(["/loginSuccess"])
  }
    
  }
  successfullLogin(){
    console.log("this tokemn :"+this.token);
    
}
forgotPassword(){
  console.log("forgot password");
  
this.router.navigate(["/forgotPassword"])
}
}