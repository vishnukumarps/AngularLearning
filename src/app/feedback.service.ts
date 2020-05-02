
import { Feedback } from './../Model/Feedback-detail.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  readonly rootURL = 'https://localhost:44317/api';
  formData: Feedback;
  constructor(private http: HttpClient) { }

  postFeedback(formData:FeedbackService){
    return this.http.post(this.rootURL+'/Feedbacks',formData);
  }

  getFeedbacks(){
    return this.http.get(this.rootURL+'/Feedbacks');
  }

}
