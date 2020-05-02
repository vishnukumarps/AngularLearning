import { Feedback } from './../../Model/Feedback-detail.model';
import { NgForm } from '@angular/forms';
import { FeedbackService } from './../feedback.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers:[FeedbackService]
})
export class FeedbackComponent implements OnInit {
formData:Feedback;
FeedbackList;
  constructor(public service:FeedbackService) {

   }

  ngOnInit(): void {

    this.FeedbackList=this.service.getFeedbacks();
  }
  register(form) {
    alert("name="+form.value.name);
    console.log(form.value);
   
}

onSubmit(form:NgForm){
  alert("Name   ="+form.value.Name);
  this.insertRecord(form);
}


insertRecord(form:NgForm) {
  this.service.postFeedback(form.value).subscribe(
    res => {
     
    },
    err => { console.log(err); }
  )
}



}
