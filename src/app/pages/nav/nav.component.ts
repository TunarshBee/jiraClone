import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JiraService } from 'src/app/services/jira.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  projectList: any[] = []
  userList: any[] = []
  issueType: string[] = ['Ticket', 'Defect', 'RnD work']
  statuses: string[] = ['TO-DO', 'In Progress', 'Done']
  ticketObj: any = {
    "ticketId": 0,
    "createdDate": new Date(),
    "summary": "",
    "status": "",
    "description": "",
    "parentId": 0,
    "storyPoint": 0,
    "ticketGuid": "",
    "assignedTo": 0,
    "createdBy": 0,
    "projectId": 0
  }

  constructor(private http: HttpClient, private jiraservice: JiraService) {
    const logedInUser = localStorage.getItem('jiraLoginDetails')
    if (logedInUser != null) {
      const parsedDetail = JSON.parse(logedInUser)
      this.ticketObj.createdBy = parsedDetail.data.userId;
      console.log(this.ticketObj);

    }
  }

  ngOnInit(): void {
    this.getAvailableProducts()
    this.getAvailableUsers()
  }
  getAvailableProducts() {
    this.http.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects').subscribe((res: any) => {
      this.projectList = res.data
      console.log(this.projectList);

    })
  }
  getAvailableUsers() {
    this.http.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers').subscribe((res: any) => {
      this.userList = res.data
      console.log(this.userList);

    })
  }
  setProject(obj: any) {
    this.jiraservice.onProjectChange.next(obj)
  }
  onTicketCreate() {
    this.http.post('https://freeapi.miniprojectideas.com/api/Jira/CreateTicket', this.ticketObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    })
  }
}
