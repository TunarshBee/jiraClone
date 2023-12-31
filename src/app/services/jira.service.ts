import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JiraService {
  public onProjectChange = new Subject()
  public onTicketCreate = new Subject()

  constructor() { }
}
