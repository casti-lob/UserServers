import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/servers.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-componentesusers',
  templateUrl: './componentesusers.component.html'
})
export class ComponentesusersComponent implements OnInit {

  constructor(private userAction:UsersService) { }

  users:User[] = [];
  error:boolean = false;

  ngOnInit(): void {
    this.userAction.getUsers()
    .subscribe({
      next:(resp)=>{
        this.users = resp;
        this.error = false;
      },
      error:(err)=>{
        this.error = true;
        this.users = [];
      }
    })
  }
  
  
}




  

