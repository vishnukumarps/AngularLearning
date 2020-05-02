import { Employee } from '../Model/Employee-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  formData: Employee
  readonly rootURL2 = 'https://api.github.com/users';
  readonly rootURL = 'https://localhost:44317/api';
 // list : Employee[];

  constructor(private http: HttpClient) { }

  getEmployeeOnLine(){
    return this.http.get(`${this.rootURL2}?per_page=10`);
  }

  
  getEmployees() {
    return this.http.get(`${this.rootURL}/Employee`);
  }
  postEmployee(emp:Employee) {
    return this.http.post(this.rootURL + '/Employee', emp);
  }

}
