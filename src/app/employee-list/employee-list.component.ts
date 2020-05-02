import { EmployeeDetailService } from './../employee-detail.service';
import {Employee} from '../../Model/Employee-detail.model'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // EmpList=Employee
  // constructor() { }

  // ngOnInit(): void {
  // }

  list:Employee[];
  users2;
users;
  constructor(public userService: EmployeeDetailService) { }

  ngOnInit() {
   this.users = this.userService.getEmployeeOnLine();
     
   this.users2=this.userService.getEmployees();
    // .toPromise()
    //.then(res => this.list = res as Employee[]);
  }
}
