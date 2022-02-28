import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image'

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  list(username: string): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL + `images/${username}`);
  }

  get(username: string, id: any): Observable<any> {
    return this.http.get(API_URL + `images/${username}/${id}`);
  }

  create(username: string, data: any): Observable<any> {
    return this.http.post(API_URL + `images/${username}/new`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(API_URL + `images/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(API_URL + `images/${id}`);
  }
  
}
