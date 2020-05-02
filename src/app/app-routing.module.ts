import { FeedbackComponent } from './feedback/feedback.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


const routes: Routes = [
  // {
  //   path: '',
  //  // pathMatch: 'full',
  //   component: 
  // },
  {
    path: 'aboutus',
    component:AboutUsComponent
  }
  ,{
    path:'employeeList',
    component:EmployeeListComponent
  }
  ,
  {
    path:'paymentList',
    component:PaymentDetailsComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  }
  ,
  {
    path:'feedback',
  component:FeedbackComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
