import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  data: any;
  constructor(private fb: FormBuilder, private toastr: NgToastService,private apiService: ApiService,private router: Router) { }
  public userInfo!: FormGroup;

  ngOnInit(): void {
    this.userInfo = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Address: ['', Validators.required],
      contact: ['', Validators.required],
    })  }


    getUserDate() {
      debugger
      console.log(this.userInfo.value)
      let requestbody2: object = {

        "FirstName":this.userInfo.value.FirstName,
        "LastName":this.userInfo.value.LastName,
        "Email":this.userInfo.value.Email,
        "Address":this.userInfo.value.Address,
        "contact":parseInt(this.userInfo.value.contact),
      }
      this.apiService.getdata().subscribe(
        res => {
          console.log(res);
          this.data = res.find((a: any) => {
            return a.Fname == this.userInfo.value.Usename && a.RollNo == this.userInfo.value.Rollno
          });
        });
      console.log(requestbody2);
      if(this.userInfo.invalid){
        this.toastr.error({detail:"user error",summary:" All field are needed..!!",duration:2000})
      }
      else{
        
      this.apiService.createuser(requestbody2).subscribe(
        d=>{
          this.toastr.success({detail:"user create",summary:"successfully added Information",duration:2000})
          console.log(d)
          this.router.navigate(['/upsert'])
        }
      )
      }
    }
    cancel(){
      this.userInfo.reset();
    }
}
