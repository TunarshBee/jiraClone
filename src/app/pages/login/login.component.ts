import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router){

  }
  onLogin(){
      this.http.post('https://freeapi.miniprojectideas.com/api/Jira/Login', this.loginObj).subscribe((res:any) =>{
        if (res.data) {
          console.log(res);
          localStorage.setItem('jiraLoginDetails', JSON.stringify(res))
          this.router.navigateByUrl('/board')
        }
        else{
          alert(res.message)
        }
        
      })
  }
  // https://freeapi.miniprojectideas.com/api/Jira/Login

}
