import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessages: string[] = [];

  constructor(private logService: MessagesService) { }

  ngOnInit(): void {
    this.myMessages = this.logService.messages;
  }

}
