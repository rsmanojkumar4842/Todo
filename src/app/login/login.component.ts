import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Router
  //Dependency Injection
  //Angular.giveMeRouter.
  username = 'manoj4842';
  password = '';
  errorMessage='Invalid Credientials..';
  loginElement = false
  constructor(private router:Router){

  }
  ngOnInit() {
   
  }
  handleLogin(){ 
        if(this.username==='manoj4842' && this.password==='dummy'){
          this.router.navigate(['welcome',this.username]);
          this.loginElement = false;
        }
        else{
          this.loginElement = true;
        }
  }

}
