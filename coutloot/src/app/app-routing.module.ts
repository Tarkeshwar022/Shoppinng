import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowproductComponent } from './showproduct/showproduct.component';


const routes: Routes = [
   { path: '', component:ShowproductComponent },
   { path: 'showPrduct', component: ShowproductComponent },
  { path: 'productdetails', component: ProductdetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

