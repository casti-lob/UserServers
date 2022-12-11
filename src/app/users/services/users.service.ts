import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/servers.interface';
import { HttpClient, HttpHeaders  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url:string = "http://localhost:3000/users";
  constructor( private http: HttpClient) { }
  

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  addUser(name:string, email:string){
    this.http.post(`${this.url}`, {"name":name, "email":email})
    .subscribe((resp)=> console.log(resp));
  }
}
