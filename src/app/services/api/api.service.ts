import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usuario: any;

  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  getUserData(token: string): Observable<any> {
  // Lógica para enviar la solicitud al servidor utilizando el token
  // y obtener los datos del usuario
  return this.http.get<any>('https://dummyjson.com/auth/login', {
    headers: {
      Authorization: `Bearer ${token}`
      }
    });
  }
}
