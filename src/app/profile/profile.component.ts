import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service'
import { Router } from '@angular/router';

import {Profile} from './profile'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileDetail: any={"email":""};
  errorMsg: string;
  personalInfo = true;
  friendAndFamilyErrorMsg: string;
  constructor(private router: Router,private profileService:ProfileService) { 
    this.profileService.viewprofile(localStorage.getItem('username')).subscribe(
      data => {
        this.profileDetail = data;
        console.log(this.profileDetail)
      },
      error => this.errorMsg = error
    );
  }
  logout(){
    localStorage.removeItem("username")
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if(localStorage.getItem("username")==null)
    this.router.navigate(['/login']);
  }

}
