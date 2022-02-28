import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return this.http.get(API_URL + 'login', { params: { username: user.username, password: user.password } });
  }

  public register(user: User): Observable<any>{
    return this.http.post(API_URL + 'register', user);
  }

  public update(lastUsername: string, user: User): Observable<any>{
    return this.http.put(API_URL + `user/${lastUsername}`, user);
  }

  public delete(username: string): Observable<any>{
    return this.http.delete(API_URL + `user/${username}`);
  }

  public getUser(username: string): Observable<any>{
    return this.http.get(API_URL + `user/${username}`);
  }

}
