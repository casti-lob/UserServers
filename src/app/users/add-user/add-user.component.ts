import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

  constructor(private userAction: UsersService) { }

  ngOnInit(): void {
  }
  name:string="";
  email:string = "";

  addUser(){
    this.userAction.addUser(this.name, this.email);
    this.name="";
    this.email="";
  }


}
