import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { WellcomeComponentComponent } from './wellcome-component/wellcome-component.component';
import { PatientsServiceService } from './patients-service.service';
import { FileNotFoundComponentComponent } from './file-not-found-component/file-not-found-component.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { OnePatientComponent } from './one-patient/one-patient.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { SuccessfullLoginComponent } from './successfull-login/successfull-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientslistComponent,
    AddpatientComponent,
    UpdatePatientComponent,
    DeletePatientComponent,
    WellcomeComponentComponent,
    FileNotFoundComponentComponent,
    NoPageFoundComponent,
    OnePatientComponent,
    UserLoginComponent,
    UserSignupComponent,
    SuccessfullLoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PatientsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
