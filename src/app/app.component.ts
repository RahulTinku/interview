import { Component, OnInit } from '@angular/core';
// import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : String = 'myEMS';
//  empData : any;
last : String|undefined;


  constructor(){
    this.last = null
  }

  ngOnInit() {
    //this.getData();
  }

  // getData() : void {
  //   this.appService.getEmployees()
  //     .subscribe((res) => {
  //       this.empData = res.data;

  //     //  this.empObject =  Object.keys(res.data).map((key) => {
  //     //     this.empData.push({key : res.data[key]})
  //     //     return this.empData;
  //     //   });

  //       console.log(res);
  //     })
  // }
}