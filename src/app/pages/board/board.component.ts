import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/services/jira.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    ticketArray: any []=[];
 constructor(private http: HttpClient, private jiraservice : JiraService){
  this.jiraservice.onProjectChange.subscribe((res:any)=>{
      this.getProjectTicket(res.projectId);
  })
 }
  ngOnInit(): void {
    
  } 

  getProjectTicket(id: any){
    this.http.get(`https://freeapi.miniprojectideas.com/api/Jira/GetTicketsByProjectId?projectId=${id}`).subscribe((res:any)=>{
      if (res.result) {
       this.ticketArray = res.data;
      } else {
       alert(res.message)
      }
     })
  }

}
