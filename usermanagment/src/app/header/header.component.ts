import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private fb:FormBuilder,public routes:Router,private apiService: ApiService){}
  ngOnInit(): void {
    
  }

  logout(){
this.routes.navigate(['/singup']);
sessionStorage.removeItem('tokan');
  }
}
