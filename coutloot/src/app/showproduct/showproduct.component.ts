import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  constructor(private myservice:MyserviceService, private router: Router,private http:HttpClient ) { }
  productList:any;
  productsData:any;
  ngOnInit() {
    this.myservice.getData().subscribe(data=>{
      this.productList=data
      console.log(data)
    })
  }
 
 
  getDetails(product_id){
    console.log('id',product_id)
    const extras = { queryParams: { _id: product_id}};
    this.router.navigate(['/productdetails'], extras);
  }

}
