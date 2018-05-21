import {Component, OnInit} from "@angular/core";
import {MessageService} from "../message.service";

@Component({
  selector : "app-messages",
  templateUrl : "./messages.html",
  styleUrls : ["./messages.css"]
})

export class MessagesComponent implements OnInit{

  constructor(public messagesService : MessageService){

  }

  ngOnInit() {

  }
}
