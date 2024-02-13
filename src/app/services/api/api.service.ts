import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://dummyjson.com/auth/login"

  constructor(private http:HttpClient) { }
}
