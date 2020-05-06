import { NgForm } from '@angular/forms';
import { EmployeeDetailService } from './../employee-detail.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[EmployeeDetailService]
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
user;
h='hello vishnu';
ImgeUrls:'';


  constructor(private userService:EmployeeDetailService, 
     private formBuilder: FormBuilder
    ) { }

    
    getImgeName(event){
      alert("Image Name"+event)
      this.ImgeUrls=event;
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: [''],
      Age:[0],
      Salary:[0],
      ImageUrl:['']
     
  });

  }
  onSubmit(from:NgForm){
    //this.submitted = true;
    alert("Image URLLLLLLL+event"+this.ImgeUrls);
    this.form.value.ImageUrl=this.ImgeUrls;
    alert("Submit Image URL="+this.form.value.ImageUrl);
    //this.form.value.Age =Number( this.form.value.Age );
    //this.form.value.Salary=Number(this.form.value.Salary );

    
    this.userService.postEmployee(this.form.value).subscribe();

  }

}
