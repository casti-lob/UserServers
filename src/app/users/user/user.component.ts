import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/servers.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy{
  paramsSubscription!: Subscription;
  constructor(private route: ActivatedRoute) { }
  
  user!: {id: number, name: string};
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
      };

      this.route.params
  .subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    }
);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
