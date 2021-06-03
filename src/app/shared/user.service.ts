import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDetails } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    const url = 'assets/user.json'; 
    return this.httpClient.get<User[]>(url);
  }

  getUserById(id:String):Observable<UserDetails>{
    const url =  `https://dummyapi.io/data/api/user/${id}`;
    return this.httpClient.get<UserDetails>(url, { headers: { 'app-id': '60b4b89a350baf06d739aa4d' } })
  }
}

// https://dummyapi.io/data/api/user?page=5&limit=10
//return this.httpClient.get('https://dummyapi.io/data/api/user?page=5&limit=10', { headers: { 'app-id': '60b4b89a350baf06d739aa4d' } })
