import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component'
import {ProfileComponent} from './profile/profile.component';
import {AddressComponent} from './address/address.component';
import {CardComponent} from './card/card.component';
import {ProductComponent} from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
						{ path: 'register', component: RegisterComponent },
						{ path: 'home', component: HomeComponent },
						{ path: 'profile', component: ProfileComponent },
						{ path: 'address', component: AddressComponent },
						{ path: 'card', component: CardComponent },
						{path:'product',component: ProductComponent},
						{path:'productDetails/:id',component: ProductDetailsComponent},




						{ path: '', redirectTo: '/login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

