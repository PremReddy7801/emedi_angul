export class Visits{
    visitId:number
    patientId:string;
    status:number
    createdDate:Date
    createdBy:string
    updatedBy:string

    // deserialize(input:any){
    //     Object.assign(this,input);
    //     return this;
    // }
}