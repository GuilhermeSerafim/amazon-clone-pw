import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartItem } from '../../interfaces/cart-item';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summer',
  imports: [HeaderComponent, FooterComponent, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './summer.component.html',
  styleUrl: './summer.component.scss'
})
export class SummerComponent {
  itensDeVerao: CartItem[] = [
    {
      img: '/assets/verao/1.jpg',
      title: 'Weber Master-Touch 22"',
      stars: 4.5,
      reviews: 93,
      price: 309,
      delivery: 'FREE delivery Tue, Jun 3',
      colors: ['#9fd242', '#000', '#ccc'],
      id: '1',
      disabled: false,
    },
    {
      img: '/assets/verao/2.jpg',
      title: '3-Piece Patio Set',
      stars: 4.5,
      reviews: 1041,
      price: 189.99,
      delivery: 'FREE delivery Jun 4 - 6',
      colors: [],
      id: '2',
      disabled: false,
    },
    {
      img: '/assets/verao/3.jpg',
      title: 'Outdoor Pillow Set',
      stars: 4.3,
      reviews: 591,
      price: 35.99,
      oldPrice: 45.99,
      delivery: '$5 delivery Jun 10 - 20',
      colors: ['#1d293d', '#4a5985', '#cfd2da'],
      id: '3',
      disabled: false,
    },
    {
      img: '/assets/verao/4.jpg',
      title: 'YETI Haul Wheeled Cooler',
      stars: 4.8,
      reviews: 3931,
      price: 360,
      oldPrice: 450,
      delivery: 'FREE delivery Jun 3 - 6',
      colors: ['#9fd242', '#3693c9'],
      id: '4',
      disabled: false,
    },
    {
      img: '/assets/verao/5.jpg',
      title: 'VASAGLE Serving Cart',
      stars: 4.6,
      reviews: 3051,
      price: 73.89,
      oldPrice: 82.99,
      delivery: 'FREE delivery Thu, Jun 5',
      deal: true,
      id: '5',
      disabled: false,
    },
    {
      img: '/assets/verao/6.jpg',
      title: 'Wekapo Beach Blanket',
      stars: 4.6,
      reviews: 879,
      price: 28.99,
      delivery: 'FREE delivery Jun 6 - 9',
      id: '6',
      disabled: false
    },
    {
      img: '/assets/verao/7.jpg',
      title: 'Retro Sunglasses Pack',
      stars: 4.4,
      reviews: 2102,
      price: 17.49,
      delivery: 'FREE delivery Wed, Jun 5',
      colors: ['#a2b86c', '#a05328', '#f3e6d5', '#000'],
      id: '7',
      disabled: false
    },
    {
      img: '/assets/verao/8.jpg',
      title: 'Summer Glass Jar Set',
      stars: 4.7,
      reviews: 532,
      price: 32.95,
      delivery: 'FREE delivery Jun 7 - 10',
      id: '8',
      disabled: false
    },
    {
      img: '/assets/verao/9.jpg',
      title: 'Bedsure Cooling Blanket',
      stars: 4.5,
      reviews: 1598,
      price: 42.99,
      delivery: 'FREE delivery Jun 3 - 6',
      id: '9',
      disabled: false
    },
    {
      img: '/assets/verao/11.jpg',
      title: 'Owala FreeSip Bottle',
      stars: 4.9,
      reviews: 1934,
      price: 24.95,
      delivery: 'FREE delivery Tue, Jun 4',
      colors: ['#00bcd4', '#f44336', '#ffc107'],
      id: '11',
      disabled: false
    },
    {
      img: '/assets/verao/12.jpg',
      title: 'Crochet Beach Tote Bag',
      stars: 4.6,
      reviews: 876,
      price: 19.99,
      delivery: 'FREE delivery Fri, Jun 7',
      id: '12',
      disabled: false
    },
    {
      img: '/assets/verao/13.jpg',
      title: 'Portable Neck Fan',
      stars: 4.4,
      reviews: 1323,
      price: 26.49,
      delivery: 'FREE delivery Jun 5 - 8',
      id: '13',
      disabled: false
    }
  ];
  searchText: string = '';

  constructor(private cartService: CartService, private snackBar: MatSnackBar) { }

  get itensFiltrados() {
    return this.itensDeVerao.filter(item =>
      item.title!.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addCart(cartItem: CartItem) {
    cartItem.disabled = true; // desabilita imediatamente ao clicar
    this.cartService.addItemToCart(cartItem)
      .subscribe({
        next: () => {
          this.snackBar.open("Item adicionado ao carrinho", '', {
            duration: 3000
          });
        },
        error: err => {
          console.error('Falha ao adicionar item no carrinho', err);
          cartItem.disabled = false; // reabilita caso dê erro]
        }
      })
  }

}