import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  usuario: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const token = localStorage.getItem('token');
    if (token) {
      this.apiService.getUserData(token).subscribe(
        (data: any) => {
          this.usuario = data; // Asignar los datos del usuario a la variable usuario
        },
        error => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      );
    }
  }
}