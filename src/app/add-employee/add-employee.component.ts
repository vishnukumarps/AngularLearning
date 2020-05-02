
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[EmployeeDetailService]
})
export class AddEmployeeComponent implements OnInit {

  constructor(public Employee:EmployeeDetailService) { }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  
  ngOnInit(): void {
    //this.employeeService.AddEmployee();
  }

  resetForm(form:NgForm){

  }
  
  insertRecord(form: NgForm) {
    alert("Hi"+form.value.Name);
    this.Employee.postEmployee(form.value).subscribe(
      res => {
        this.resetForm(form);
      //  this.Employee.refreshList();
      },
      err => { console.log(err); }
    )
  }


}
