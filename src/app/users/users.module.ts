import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    ComponentesusersComponent,
    AddUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    RouterModule
    

  ],
  exports:[
    ComponentesusersComponent
  ]
})
export class UsersModule { }
