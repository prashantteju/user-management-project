import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string="http://localhost:3000/getvalue";
  // url2:string="http://localhost:3000/student/";
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accept', 'aplication/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http:HttpClient) { }
  // display user data
  getdata(){
    return this.http.get<any>("http://localhost:3000/Mangeuser")
  }
  // insert data into user data
 setdata(requestbody:any){
  return this.http.post<any>("http://localhost:3000/getvalue",requestbody)
 }
 getdata1(){
  return this.http.get<any>("http://localhost:3000/Mangeuser")
 }


 loginUser(){
return this.http.get<any>("http://localhost:3000/getvalue")
 }
 createuser(requestbody2:any){
  return this.http.post<any>("http://localhost:3000/Mangeuser",requestbody2)
 }


 displayinfo(){
  return this.http.get<any>("http://localhost:3000/Mangeuser")
 }

 UserUpdate(Id:any,requestbody:any){
return this.http.put(`http://localhost:3000/Mangeuser/${Id}`,requestbody)
 }


 deleteuser(id:any){
  const url=`http://localhost:3000/Mangeuser/${id}`;
  return this.http.delete<any>(url,this.httpOptions);
}

createResult(requestbody:any){
return this.http.post<any>("http://localhost:3000/AddResult",requestbody);
}

displayresult(){
  return this.http.get<any>("http://localhost:3000/AddResult");
}
}
