import { Component } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { Food } from '../food';

@Component({
  selector: 'app-foodcreate',
  templateUrl: './foodcreate.component.html',
  styleUrls: ['./foodcreate.component.css']
})
export class FoodcreateComponent {
  food = new Food("",0);
  constructor(private foodservice:FoodService, private router:Router)
  {

  }
  savedata()
  {
    this.foodservice.insertfood(this.food).subscribe(()=>{
      this.router.navigateByUrl("/");
    });
  }
}
