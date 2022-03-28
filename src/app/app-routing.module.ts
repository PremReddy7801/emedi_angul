import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { FileNotFoundComponentComponent } from './file-not-found-component/file-not-found-component.component';
import { OnePatientComponent } from './one-patient/one-patient.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { SuccessfullLoginComponent } from './successfull-login/successfull-login.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { WellcomeComponentComponent } from './wellcome-component/wellcome-component.component';

const routes: Routes = [
  
  { path: 'getallpatients', component: PatientslistComponent },
  {path:"onepatient/:patientId",component:OnePatientComponent},
  {path:'wellcome',component:WellcomeComponentComponent},
  {path:'addpatient',component:AddpatientComponent},
  {path:'updatepatient/:patientId',component:UpdatePatientComponent},
  {path:'deletepatient/:patientId',component:DeletePatientComponent},
  {path:'signup',component:UserSignupComponent},
  {path:'login',component:UserLoginComponent},
  {path:'loginSuccess',component:SuccessfullLoginComponent},
  {path:'',redirectTo:'wellcome',pathMatch:'full'},
  {path:'**',component:FileNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
