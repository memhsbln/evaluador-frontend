import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }
  login(username: any, password: any) {
    const body = {
      username,
      password
    };
    return this.http.post(`${this.url}/auth/login`, body);
  }

  register(name: any, username: any, password: any) {
    const body = {
      name,
      username,
      password
    };
    return this.http.post(`${this.url}/usuarios`, body);
  }
}
