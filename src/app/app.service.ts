// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class AppService {
  constructor(private http : HttpClient) {}

  getEmployees() : Observable<any>{
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
      map((res) => res),
      catchError( (error) => error)
    )
  }
}