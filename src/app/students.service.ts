import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
//baseUrl:string='http://localhost:3000/api';//express server url
headers=new HttpHeaders().set('content-Type','application/json');
  constructor(private _http:HttpClient) { }

//create studdent data
createstudent(data:any):Observable<any>{
  return this._http.post<any>("http://localhost:3000/api/create", data).pipe(map((res:any)=>{
      return res;
    }))
}

//Get all Students
getstudents(){
  return this._http.get("http://localhost:3000/api");
}

//get single student
getstudent(id:any):Observable<any>{
  return this._http.get("http://localhost:3000/api/read/:id",id).pipe(map((res:any)=>{
    return res;
  }))
}
//update employee
Updatestudent(data:any):Observable<any>{
  return this._http.put("http://localhost:3000/api/update/:id",data).pipe(map((res:any)=>{
    return res;
  }))
}
 
//delete student
deletestudent(id:any):Observable<any>{
  return this._http.delete("http://localhost:3000/api/delete/:id",id).pipe(map((res:any)=>{
    return res;
  }))
}
}





