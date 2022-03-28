import { Injectable, Optional } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, pipe, throwError as observableThrowError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PersonalInfo } from './services/PersonalInfo';
import { FrontDesk } from './services/FrontDesk';
import { Tokens } from './services/tokens';

@Injectable({
  providedIn: 'root'
})
export class PatientsServiceService {

  token:String="";
  tokens:Tokens= new Tokens();

  private PatientsBaseUrl:string = 'https://emedi.herokuapp.com/medi/patient';
  private frontDeskBaseUrl:string = 'https://emedi.herokuapp.com/emedi/frontdesk';
  private getallUrl:string = this.PatientsBaseUrl+'/get-all-patients'
  private getOnePatientlUrl:string = this.PatientsBaseUrl+'/get-patient-by-id/'
  private postUrl:string =this.PatientsBaseUrl+'/add-with-visits'
  private updateUrl:string =this.PatientsBaseUrl+'/update-patient'
  private deleteUrl:string =this.PatientsBaseUrl+'/update-patient/'
  private searchPatientIdul:string=this.PatientsBaseUrl+'/get-patientid-by-phone-name'
  private loginUrl:string = this.frontDeskBaseUrl+'/login';
  private signUpnUrl:string = this.frontDeskBaseUrl+'/signup';
 
  constructor(private http: HttpClient) { }
  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)}
  headers:Headers = new Headers({
   'Content-Type': 'application/json',
   'Authorization': `Bearer `
  })
  private httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  })
  }
  ngOnInit() { }
  getAllPatients(){
    
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.get<PersonalInfo[]>(this.getallUrl,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  savePatient(patient:PersonalInfo){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.post<PersonalInfo>(this.postUrl,patient,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  getpatient(patientId:string){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.get<PersonalInfo>(this.getOnePatientlUrl+"?patientId="+patientId,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  updatePatient(patient:PersonalInfo){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.put<number>(this.updateUrl,patient,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  deletePatient(patientId:string){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.delete<number>(this.deleteUrl+"/"+patientId,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  searchPatientId(firstName:string,lastName:string,phoneNumber:string){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token)   
  };
    return this.http.get<any>(this.searchPatientIdul+"?firstName="+firstName+"&lastName="+lastName+"&phoneNumber="+phoneNumber,options).pipe(map(data=>data,catchError(this.handleError)))
  }
  login(username:string,password:string){
    console.log(username,password +"service");
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
   return this.http
        .post<Tokens>(this.loginUrl, body.toString(), options).pipe(map(data=>{
            this.tokens=data;
          console.log((this.tokens)+"token classsssssssssss");
          this.token=data.accessToken;
          console.log(this.token);
          
          
        },catchError(this.handleError)))
  }
  signUp(frontDesk:FrontDesk){
    console.log(frontDesk);
    
    return this.http.post<FrontDesk>(this.signUpnUrl,frontDesk).pipe(map(data=>data,catchError(this.handleError)))
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
