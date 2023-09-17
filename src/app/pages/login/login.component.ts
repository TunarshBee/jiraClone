import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any ={
    "userId": 0,
    "emailId": "string",
    "fullName": "string",
    "password": "string"
  }

  onLogin(){
    
  }
  // https://freeapi.miniprojectideas.com/api/Jira/Login

}
