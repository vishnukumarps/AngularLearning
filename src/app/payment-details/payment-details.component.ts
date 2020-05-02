import { PaymentDetailsService } from './../payment-details.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  paymentDetailsList;
  constructor(private paymentService:PaymentDetailsService) { }
  
  ngOnInit() {
    this.paymentDetailsList = this.paymentService.getPaymentDetails();
  }

}
