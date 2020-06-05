import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from './product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodsOfCategory;
  errorMessage;
  search:string="";
  realprice:Number;
  discount:any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private productService: ProductService) { 
      this.productService.viewproducts().subscribe(
        data => {
          if (data) {
            this.prodsOfCategory=data;            
          } else {
            
          }
        },
        error => {
        console.log(error)
          
        }
      );
  }
  prodsearch(){
    this.productService.searchproduct(this.search).subscribe(
      (response) => {
        
        this.prodsOfCategory=response;
        console.log(this.prodsOfCategory);
        
        
      },
      (errorResponse) => {      
      }
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
