import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  msg:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  homePage(){
    this.router.navigate(["home"]);
  }
  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "vedavyas" && pass1 == "123456"){
      this.msg="Successfully Login"
    }else {
      this.msg = "Failure try once again";
    }

}
}
