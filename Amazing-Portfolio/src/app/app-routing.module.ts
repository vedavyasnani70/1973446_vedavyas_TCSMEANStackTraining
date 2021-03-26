import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {path:"\loginpage",component:LoginpageComponent},
  {path:"\signuppage",component:SignuppageComponent},
  {path:"\myportfolio",component:MyportfolioComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
