import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodcreateComponent } from './foodcreate/foodcreate.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { FoodeditComponent } from './foodedit/foodedit.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"create", component:FoodcreateComponent},
  {path:"details/:id", component:FooddetailsComponent},
  {path:"edit/:id", component:FoodeditComponent},
  {path:"list", component:FoodlistComponent},
  {path:"foot", component:FooterComponent},
  {path:"head", component:HeaderComponent},
  {path:"", component:FoodlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
