import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from "jquery";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  stompClient: any = null;
  sockJS: any = null;

  constructor() {}

  ngOnInit(): void {
    this.sockJS = new SockJS('http://localhost:8080/gs-guide-websocket');
    this.stompClient = Stomp.over(this.sockJS);
    this.stompClient.connect({}, (frame: any) => {
        this.setConnected(true);
        console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/greetings', (greeting: any) => {
            this.showGreeting(JSON.parse(greeting.body).content);
        });
    });

    // Event wiring
    $("form").on('submit', function (e) {
      e.preventDefault();
    });
    $( "#send" ).on("click", () => { this.sendName(); });
  }

  setConnected(connected: any) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
  }

  sendName() {
    this.stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
    //this.sockJS.send(JSON.stringify({'name': $("#name").val()}));
  }

  showGreeting(message: any) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
  }

}
