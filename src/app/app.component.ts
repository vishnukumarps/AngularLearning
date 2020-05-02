import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagement';
//   constructor(private http:HttpClient){}
  
// ngOnInit(){
//   this.http.get("https://api.github.com/users?per_page=10")
//     .subscribe(data=>{
//   console.log(data);
//   });
// }
  
}
