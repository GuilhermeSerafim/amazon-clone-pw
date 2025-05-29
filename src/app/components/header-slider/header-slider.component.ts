import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-slider',
  imports: [MatIconModule],
  templateUrl: './header-slider.component.html',
  styleUrl: './header-slider.component.scss'
})
export class HeaderSliderComponent {
  images = [
    './assets/header1.jpg',
    './assets/header2.jpg',
    './assets/header3.jpg',
    './assets/header4.jpg',
    './assets/header5.jpg',
    './assets/header6.jpg'
  ];

  currentIndex = 0;

  nextSlide() {
    // O operador % (módulo) garante que, ao ultrapassar o final da lista, ele volte para o início.
    // Ex: se currentIndex = 5 (última imagem) → (5 + 1) % 6 = 0 → volta pro começo.
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    // Se o índice atual for 0, ele volta para a última imagem (images.length - 1)
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }
}
