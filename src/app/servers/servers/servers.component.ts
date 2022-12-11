import { Component, OnInit } from '@angular/core';
import { HistoryServersService } from '../services/history-servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private serviceServers :HistoryServersService) { 
    
  }

  ngOnInit(): void {
  }
  

  get servers(){
    return this.serviceServers.servers;
  }

}
