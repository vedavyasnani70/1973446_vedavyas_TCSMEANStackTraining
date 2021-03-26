import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.css']
})
export class MyportfolioComponent implements OnInit {
msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any) {
    //console.log("Event generated");
    console.log(loginRef);
    let contact1 = loginRef.contact;
    let number1 = loginRef.number;
   document.write("My contact is"+contact1);
   document.write("number is "+number1);
  
}
}

