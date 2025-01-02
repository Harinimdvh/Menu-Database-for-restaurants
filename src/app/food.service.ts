import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpclient:HttpClient) { }
  public insertfood(food:Food)
  {
    let apiurl="http://localhost:3000/foods";
    let fooddata= JSON.stringify(food);
    return this.httpclient.post(apiurl,fooddata);
  }
  public updatefood(id:number, food:Food)
  {
    let apiurl=`http://localhost:3000/foods/${id}`;
    let foodata=JSON.stringify(food);
    return this.httpclient.put(apiurl,foodata);
  }
  public deletefood(id:number)
  {
    let apiurl=`http://localhost:3000/foods/${id}`;
    return this.httpclient.delete(apiurl);
  }
  public selectallfood()
  {
    let apiurl="http://localhost:3000/foods";
    return this.httpclient.get<Food[]>(apiurl);
  }
  public selectfoodbyid(id:number)
  {
    let apiurl=`http://localhost:3000/foods/${id}`;
    return this.httpclient.get<Food>(apiurl);
  }
}
