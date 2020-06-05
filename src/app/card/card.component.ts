import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CardService} from './card.service';
import {Card} from './card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm: FormGroup;
    card :Array<Card>=[];
  result:any;
  tcard:Card;
  submit: boolean;
  errorMsg: string;
  successMsg: string;
  cardview:boolean=false;

  username:string=localStorage.getItem('username') ;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private cardService: CardService) { 
      this.cardview=false;
      
    }
    

  addcard(){
    this.tcard=this.cardForm.value;
        this.tcard['email']=this.username;
        this.cardService.newcard(this.tcard).subscribe(
          data => {
            if (data) {
              this.successMsg=data['message'];
              console.log(data);
              this.viewcards();
              
  
              //this.router.navigate(['/home']);
            } else {
              
            }
          },
          error => {

          console.log(error);
          this.errorMsg=error.error.error;
            
          }
        );
        

  }
  delete(id){
    for (var i=0;i<this.result.length;i++)
    {
      if(this.result[i]['card_number']==id)
      {
        break;
      }
    }
    this.cardService.deletecard(this.result[i]).subscribe(
      data => {
        if (data) {
          
          console.log(data);
          this.successMsg="Card deleted successfully";
          this.viewcards();
          

          //this.router.navigate(['/home']);
        } else {
          
        }
      },
      error => {
      console.log(error)
        
      }
    );


  }

  viewcards(){
    this.cardService.viewcards(this.username).subscribe(
      data => {
        if (data) {
          this.card=data;
          this.result=data;
          console.log(this.card);
          

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
    this.viewcards();
    this.cardForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    card_number: ['', [Validators.required]],
    month: ['', [Validators.required]],
    year: ['', [Validators.required]]


    });
  }

}
