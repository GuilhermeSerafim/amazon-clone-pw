import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-summer',
  imports: [HeaderComponent, FooterComponent, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './summer.component.html',
  styleUrl: './summer.component.scss'
})
export class SummerComponent {
  itensDeVerao = [
    {
      img: '/assets/verao/1.jpg',
      title: 'Weber Master-Touch 22"',
      stars: 4.5,
      reviews: 93,
      price: 309,
      delivery: 'FREE delivery Tue, Jun 3',
      colors: ['#9fd242', '#000', '#ccc'],
    },
    {
      img: '/assets/verao/2.jpg',
      title: '3-Piece Patio Set',
      stars: 4.5,
      reviews: 1041,
      price: 189.99,
      delivery: 'FREE delivery Jun 4 - 6',
      colors: [],
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
    },
    {
      img: '/assets/verao/5.jpg',
      title: 'VASAGLE Serving Cart',
      stars: 4.6,
      reviews: 3051,
      price: 73.89,
      oldPrice: 82.99,
      delivery: 'FREE delivery Thu, Jun 5',
      deal: true
    }
  ];
  searchText: string = '';
  get itensFiltrados() {
    return this.itensDeVerao.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}