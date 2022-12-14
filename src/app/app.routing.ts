import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
    
  },
  {
    path:'users',
    component: ComponentesusersComponent
  },
  {
    path:'users/:id/:name',
    component:UserComponent
  },
  {
    path: 'servers/:id/edit',
    component:EditServerComponent
  },
  {
    path:'servers',
    component: ServersComponent
  },
  {
    path:'addUser',
    component: AddUserComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
