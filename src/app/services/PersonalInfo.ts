import { Visits } from "./Visits";

export class PersonalInfo {
    
    patientId:string;
    firstName:string;
    lastName:string;
    fullName:string;
    phoneNumber:string;
    age:number;
    gender:string;
    status:number;
    createdDate:Date=new Date()
    createdBy:string;
    updatedBy:string;
    visits:Visits[];

    // deserialize(input:any){
    //     Object.assign(this, input);
    //     this.visits=new Visits().deserialize(input.visits);
    //     return this;
    // }

}