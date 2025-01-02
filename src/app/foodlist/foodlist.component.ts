import { Component } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {
  foods:Food[]=[];
  constructor(private foodservice:FoodService)
  {
    this.foodservice.selectallfood().subscribe((fd)=>{
      this.foods=fd;
    });
  }

}
