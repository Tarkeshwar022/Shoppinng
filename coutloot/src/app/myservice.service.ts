import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  
  constructor(private http:HttpClient ) { }
 getData():Observable<any>{
  
   return this.http.get("https://demo6278018.mockable.io/listProduct")
 
 }

 getImgData( pId: any ):Observable<any>{
   return this.http.get("https://demo6278018.mockable.io/details?productId=pId")
 }
}
