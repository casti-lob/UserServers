import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';

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
    path:'servers',
    component: ServersComponent
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
