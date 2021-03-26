import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    if(user1 == "vedavyas" && pass1 == "123456"){
      this.msg="Successfully Registered"
    }else {
      this.msg = "Failure try once again";
    }

}
}

