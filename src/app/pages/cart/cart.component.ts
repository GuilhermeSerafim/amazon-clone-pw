import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';

interface CartItemWithQty extends CartItem {
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItemWithQty[] = [];
  isGift = false;

  constructor(private cartService: CartService) {
    this.loadCart();
  }

  private loadCart() {
    this.cartService.getCartItems()
      .subscribe(items => {
        // adiciona quantidade padrão = 1
        this.cartItems = items.map(item => ({
          ...item,
          quantity: (item as any).quantity ?? 1
        }));
      });
  }

  get subtotal(): number {
    return this.cartItems
      .reduce((sum, item) => sum + item.price! * item.quantity, 0);
  }

  deleteItem(id: string) {
    // implementar remoção
  }

  saveForLater(id: string) {
    // implementar save for later
  }

  increaseQty(item: any) {
    item.qty = (item.qty || 1) + 1;
  }

  decreaseQty(item: any) {
    if ((item.qty || 1) > 1) {
      item.qty--;
    }
  }
}
