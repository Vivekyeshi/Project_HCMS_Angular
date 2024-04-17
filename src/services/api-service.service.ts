import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectEncodingOptions } from 'fs';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:8080/employees';
  constructor(private http: HttpClient) { }
  
  getAllEmployees(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmployeeById(id:number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  createEmployee(data: any): Observable<any[]>{
    return this.http.post<any[]>(this.apiUrl,data);
  }

  updateEmployeeById(id: number, data: any): Observable<any[]>{
    return this.http.put<any[]>(`${this.apiUrl}/${id}`, data);
  }

  deleteEmployeeById(id: number): Observable<any[]>{
    return this.http.delete<any[]>(`${this.apiUrl}/${id}`);
  }
}
