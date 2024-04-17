import { department } from "./department.model";
import { roles } from "./role.model";

export interface Employee{
    id: number,
    firstName: String,
    lastName: string,
    gender:string,
    dateOfBirth:string | null,
    email:string,
    phone:string,
    address:string,
    nationalId:string,
    // maritalStatus: string,
    emergencyContactName: string,
    emergencyContactPhone:string,
    department:department | null,
    position: string,
    skillset: string,
    employmentStartDate: string | null,
    employmentEndDate: string | null,
    manager: string,
    salary: number,
    employmentStatus: string,
    bankAccountNumber: number,
    role: roles | null
    


}