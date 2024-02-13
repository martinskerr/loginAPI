import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(): void {
    this.checkLocalStorage();
  }


  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['main']);
    }
  }




  constructor(private apiService: ApiService, private router:Router) { }
  errorMessage: string = '';

  login(username: string, password: string) {
    this.apiService.login(username, password).subscribe(
      response => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['main'])
        }
      },
      error => {
        // error
        console.error(error);
        if (error.error && error.error.message === "Authentication Problem") {
          //si el error es específico de autenticación, mostrar un mensaje al usuario
          this.errorMessage = 'Problema de autenticación: Usuario o contraseña incorrectos.';
        } else {
          
          this.errorMessage = 'Se produjo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    );
  }
}
