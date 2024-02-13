import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: any;
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['main']); // Si hay un token, redirigir a la página principal
    }
  }

  login(username: string, password: string) {
    this.apiService.login(username, password).subscribe(
      response => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['main']); // Redirigir a la página principal después del inicio de sesión exitoso
        }
      },
      error => {
        console.error(error);
        if (error.error && error.error.message === "Authentication Problem") {
          this.errorMessage = 'Problema de autenticación: Usuario o contraseña incorrectos.';
        } else {
          this.errorMessage = 'Se produjo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    );
  }
}