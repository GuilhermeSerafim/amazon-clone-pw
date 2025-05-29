import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  errorMsg: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.errorMsg = '';

    if (!this.user || !this.password) {
      this.errorMsg = 'Preencha todos os campos';
      return;
    }

    this.authService.login(this.user, this.password).subscribe(user => {
      if (user) {
        localStorage.setItem('user', user.name);
        this.router.navigate(['/']);
      } else {
        this.errorMsg = 'Usuário ou senha inválidos';
      }
    });

  }
}
