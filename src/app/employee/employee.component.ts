import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empData : any;

  constructor(private appService : AppService){}

  ngOnInit() {
    this.getData();
  }

  getData() : void {
    this.appService.getEmployees()
      .subscribe((res) => {
        this.empData = res.data;

      //  this.empObject =  Object.keys(res.data).map((key) => {
      //     this.empData.push({key : res.data[key]})
      //     return this.empData;
      //   });

        console.log(res);
      })
  }
}
