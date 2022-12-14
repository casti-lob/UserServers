import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';



@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
