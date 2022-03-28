import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsServiceService } from '../patients-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  username:string="puri";
  password:string="1234";
  token:string;
  constructor(private service:PatientsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  login(){
    console.log(this.username,this.password);
    
    this.service.login(this.username,this.password).subscribe(data=>{
      //  this.token = data.headers.get('accesstoken'); 
    });
    console.log(this.token);
    this.successfullLogin();

}
successfullLogin(){
      this.router.navigate(["/loginSuccess"])
}
forgotPassword(){

}
}