import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 userList:any[]=[]
 userObj: any ={
  "userId": 0,
  "emailId": "",
  "fullName": "",
  "password": ""
}
    constructor (private http: HttpClient){
  
    }
ngOnInit(): void {
  this.getAvailableUsers()
}
  
    getAvailableUsers(){
      this.http.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers').subscribe((res:any)=>{
        this.userList = res.data
        console.log(this.userList);
        
      })
    }
    onSave(){
      this.http.post('https://freeapi.miniprojectideas.com/api/Jira/CreateUser', this.userObj).subscribe((res:any)=>{
       if (res.result) {
        alert(res.message)
        this.getAvailableUsers()
       } else {
        alert(res.message)
       }
      })
    }
}
