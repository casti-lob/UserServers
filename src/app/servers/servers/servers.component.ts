import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryServersService } from '../services/history-servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  constructor(private serviceServers :HistoryServersService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    
  }

  ngOnInit(): void {
  }
  

  get servers(){
    return this.serviceServers.servers;
  }
  onReload() {
    // para romper el enlace
    //this.router.navigate(['servers'], { relativeTo: this.route });
    this.router.navigate(['servers'])
    }
}
