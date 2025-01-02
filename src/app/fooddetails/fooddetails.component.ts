import { Component } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent {
  id:number=0;
  food = new Food("",0);
  constructor(private foodservice:FoodService, private activatedroute:ActivatedRoute, private router:Router)
  {
    this.id=this.activatedroute.snapshot.params["id"];
    this.foodservice.selectfoodbyid(this.id).subscribe((fd)=>{
      this.food=fd;
    })
  }
  removefood()
  {
    let conf = confirm("Are you Sure to delete");
    if(conf)
    {
      this.foodservice.deletefood(this.id).subscribe(()=>{
        this.router.navigateByUrl("/");
      });
    }
    else{
      alert("Delete cancelled");
    }
  }
}
