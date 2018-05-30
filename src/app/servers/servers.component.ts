import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = 'TestServer'
  isServerCreated = false
  servers = ['TestServer0', 'TestServer1', 'TestServer2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  handleCreateServer() {
    this.isServerCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server (${this.serverName}) was created`
  }

  handleUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
