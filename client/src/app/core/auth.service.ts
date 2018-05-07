import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  users = [{
    name: 'Dolores Umbridge',
    username: 'dumb',
    email: 'dumb@plat.com',
    password: 'test',
    access: ['default']
  }, {
    name: 'Albert Dondi',
    username: 'test',
    email: 'adondi@plat.com',
    password: 'user',
    access: ['QA']
  }, {
    name: 'Bill Fences',
    username: 'bfences',
    password: 'test',
    access: ['DEV']
  }, {
    name: 'Rahotimus P',
    username: 'rahotimus',
    password: 'test123',
    access: ['admin']
  }]
  
  private user; //placeholder
  private loggedin = false;
  // placeholder for now
  constructor(
    //private http: HttpClient,
    private router: Router
  ) { }

  // can you make this entirely functional?
  authenticateUser(authUser): Observable<any> {
    return new Observable(
      (observer) => {
        let user = this.users
          .filter(
            (user) => user.username == authUser.username,
            (err) => console.log('user not found'))
          .filter(
            (user) => user.password === authUser.password,
            (err) => console.log('passwords do not match'))
          .map((res) => {
            let user = {
              name: res.name,
              username: res.username,
            }
            return user;
          })[0];

        if (user) {
          this.user = user;
          this.loggedin = true;
          observer.next(user);
        } else {
          //throw Observable.throw(new Error('login failed'))
          observer.error(new Error('invalid login'));
        }
        observer.complete();
      }
    )
  }

  getUser(){
    return this.user;
  }

  // TODO
  isLoggedIn() {
    //token not expired
    return this.loggedin;
  }

  // TODO
  logout() {
    this.loggedin = false;
    this.router.navigate(['/home']);
  }
}
