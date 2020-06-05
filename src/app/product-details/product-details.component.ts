import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

import {ProductDetailsService} from './product-details.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string;
  productDetail:any;
  realprice:number;
  discount:number=1;

  constructor(private router1: Router,private router:ActivatedRoute,private productdetailsService:ProductDetailsService) { }

  logout(){
    localStorage.removeItem("username")
    this.router1.navigate(['/login']);
  }

  ngOnInit(): void {
    if(localStorage.getItem("username")==null)
    this.router1.navigate(['/login']);
    this.router.params.subscribe(id=>this.id=id['id']);
  this.productdetailsService.viewproductid(this.id).subscribe(
    (response) => {
      
      this.productDetail=response;
      console.log(this.productDetail);
      this.discount=this.productDetail.pSeller.pDiscount*100;
  this.realprice=(this.productDetail.price-(this.productDetail.pSeller.pDiscount*this.productDetail.price));
      
      
    },
    (errorResponse) => {      
    }
  );
  }

}
