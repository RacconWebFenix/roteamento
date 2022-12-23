import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private route: Router) {}

  login() {
    this.authService.login(this.email, this.senha)
      ? this.route.navigate(['pagina-protegida'])
      : alert('Login Inválido');
    (this.email = ''), (this.senha = '');
  }
}
