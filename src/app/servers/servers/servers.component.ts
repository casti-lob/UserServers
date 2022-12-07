import { Component, OnInit } from '@angular/core';
import { Servers } from 'src/app/interfaces/servers.interface';
import { HistoryServersService } from '../services/history-servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private serviceServers :HistoryServersService) { 
    this.servers()
  }

  ngOnInit(): void {
  }
  server: Servers[]=[
    
  ]

  servers(){
    this.server = this.serviceServers.allServers()
  }

}
