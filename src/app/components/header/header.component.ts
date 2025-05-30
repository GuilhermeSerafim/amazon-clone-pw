import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { MatIcon } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: string = '';
  qtdItensCarrinho: number = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.user = localStorage.getItem('user') || '';
    // Atualiza dinamicamente
    this.cartService.totalItems$.subscribe(total => {
      this.qtdItensCarrinho = total;
    });
  }

  navigateToLogin() {
    // this.router.navigate(['/login']);
    console.log(this.qtdItensCarrinho)
  }
}
