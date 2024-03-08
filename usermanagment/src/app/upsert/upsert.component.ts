import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.css']
})
export class UpsertComponent implements OnInit{
  userdata: any;
  Id: any;
  isEditvalue: boolean=false;
  Fname1: any;
  Lname1: any;
  Address1: any;
  Email1: any;
  contact1: any;
  
  constructor(private fb: FormBuilder, public routes: Router, private apiService: ApiService, private http: HttpClient, private toast: NgToastService) { }
  User!: FormGroup;
  ngOnInit(): void {
    this.displayuser();
    this.User = this.fb.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      Address: ["", Validators.required],
      Email: ["", Validators.required],
      contact: ["", Validators.required],
    })  
  }
  
  public displayuser() {
    this.apiService.getdata().subscribe(
      res => {
        console.log(res);
        this.userdata = res;
        console.log(this.userdata)
      }
    )
  }

  remodata(id: any) {
    if (confirm('are you sure to delete the record??')) {
      this.apiService.deleteuser(id).subscribe(data => {
        console.log(data)
        this.toast.success({ detail: "SUCCESSFULLy", summary: 'Record delete successfully', duration: 1000 });
        this.displayuser();
      })
    }
    else {
      this.displayuser();
    }

  }

  Update() {

    let requestbody: object = {
      "id": this.Id,
      "FirstName": this.User.value.FirstName,
      "LastName": this.User.value.LastName,
      "Address": this.User.value.Address,
      "Email": this.User.value.Email,
      "contact":this.User.value.contact,
    }
    console.log(requestbody);
    this.apiService.UserUpdate(this.Id, requestbody).subscribe(res => {
      // alert(123);
      this.toast.success({ detail: "SUCCESSFULLy", summary: 'Record Updated successfully', duration: 1000 });
      console.log(res);
      this.displayuser();
    })
  }

  clear() {
    this.User.reset();
  }

  isEdit(i: number, name: any, Id: any) {
    console.log(i);
    console.log(name);
    console.log(Id);
    this.Id = Id;
    this.isEditvalue = true;

    this.Fname1 = this.userdata[i].FirstName;
    this.Lname1 = this.userdata[i].LastName;
    this.Address1 = this.userdata[i].Address;
    this.Email1 = this.userdata[i].Email;
    this.contact1 = this.userdata[i].contact;

  }

}
