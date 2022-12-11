import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';
import { RouterLink } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponentesusersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
    

  ],
  exports:[
    ComponentesusersComponent
  ]
})
export class UsersModule { }
