import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodedit',
  templateUrl: './foodedit.component.html',
  styleUrls: ['./foodedit.component.css']
})
export class FoodeditComponent {
  id:number=0;
  food = new Food("",0);
  constructor(private foodservice:FoodService, private activatedroute:ActivatedRoute, private router:Router)
  {
    this.id=this.activatedroute.snapshot.params["id"];
    this.foodservice.selectfoodbyid(this.id).subscribe((fd)=>{
      this.food=fd;
    })
  }
  savedata()
  {
    this.foodservice.insertfood(this.food).subscribe(()=>{
      this.router.navigateByUrl("/");
    });
  }
}
