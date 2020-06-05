import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AddressService} from './address.service';
import {Address} from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address :Array<Address>=[];
  result:any;
  taddress:Address;
  registerForm: FormGroup;
  submit: boolean;
  errorMsg: string;
  successMsg: string;
  username:string;
  addressview:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private addressService: AddressService) {
      
      this.addressview=false;
      
    }
    edit(id){
      for (let i=0;i<this.address.length;i++)
      {
        if(this.address[i]['address_id']==id)
        {
          this.address[i]['editable']=!this.address[i]['editable'];
        }
      }
      console.log(this.address);


    }
    update(id){
      for (var i=0;i<this.result.length;i++)
      {
        if(this.result[i]['address_id']==id)
        {
          break;
        }
      }
      this.address[i]['editable']=!this.address[i]['editable'];
      
      this.addressService.updateaddress(this.result[i]).subscribe(
        data => {
          if (data) {
            
            console.log(data);
            

            //this.router.navigate(['/home']);
          } else {
            
          }
        },
        error => {
        console.log(error)
          
        }
      );


    }
    delete(id){
      for (var i=0;i<this.result.length;i++)
      {
        if(this.result[i]['address_id']==id)
        {
          break;
        }
      }
      this.addressService.deleteaddress(this.result[i]).subscribe(
        data => {
          if (data) {
            
            console.log(data);
            this.viewaddress();

            //this.router.navigate(['/home']);
          } else {
            
          }
        },
        error => {
        console.log(error)
          
        }
      );


    }
    newaddress()
	{
        this.taddress=this.registerForm.value;
        this.taddress['email']=this.username;
        this.addressService.newaddress(this.taddress).subscribe(
          data => {
            if (data) {
              
              console.log(data);
              this.viewaddress();
              this.successMsg="New address added successfully";
  
              //this.router.navigate(['/home']);
            } else {
              
            }
          },
          error => {
          console.log(error)
            
          }
        );
        

		
  };
  viewaddress(){
    this.username=localStorage.getItem('username') 
      this.addressService.viewaddress(this.username).subscribe(
        data => {
          if (data) {
            this.address=data;
            this.result=data;
            console.log(this.address);
            

            //this.router.navigate(['/home']);
          } else {
            
          }
        },
        error => {
        console.log(error)
          
        }
      );
  }
  refresh()
  {
    window.location.reload();
  }

  logout(){
    localStorage.removeItem("username")
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if(localStorage.getItem("username")==null)
    this.router.navigate(['/login']);
    this.viewaddress();
    this.registerForm = this.formBuilder.group({
      city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    address: ['', [Validators.required]],
    pincode: ['', [Validators.required]],

    phonenumber: ['', [Validators.required]]


    });
  }

  }


