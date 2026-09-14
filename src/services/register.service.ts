import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }
  register(nombre: any, apellido: any, username: any, email: any, password: any, confirmPassword: any) {
    const body = {
      id_rol: 1,
      nombre,
      apellido,
      username,
      email,
      password,
      confirmPassword
    };
    return this.http.post(`${this.url}/usuarios`, body);
  }
}
