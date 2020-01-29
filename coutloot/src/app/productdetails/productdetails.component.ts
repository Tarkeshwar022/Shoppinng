import { Component,Inject } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  proid:any;
  var_product_data:any;
  constructor(@Inject (MyserviceService) public ser, @Inject(ActivatedRoute) public per ) { 
    this.per.queryParams.subscribe(dt=>
      {
      this.proid=dt['_id'];
      console.log('proid',this.proid);
      var obj=
      {
        productId:parseInt(this.proid)
      }
      this.ser.getImgData(obj).subscribe(dt=>{
      console.log('dt',dt);
        this.var_product_data=dt;
      })
    })
  }
}
