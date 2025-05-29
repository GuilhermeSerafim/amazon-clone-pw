import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: string = '';
  constructor(private router: Router) {
    this.user = localStorage.getItem('user') || '';
  }
  navigateToLogin() {
    this.router.navigate(['/login'])
  }

}
