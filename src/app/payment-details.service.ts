import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
 
  readonly rootURL = 'https://localhost:44317/api';
  

  constructor(private http: HttpClient) { }

  getPaymentDetails() {
    return this.http.get(`${this.rootURL}/PaymentDetails`);
  }
}
