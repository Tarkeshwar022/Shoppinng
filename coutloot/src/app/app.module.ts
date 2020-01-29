import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { HeaderComponent } from './header/header.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowproductComponent } from './showproduct/showproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductdetailsComponent,
    ShowproductComponent,
  
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
