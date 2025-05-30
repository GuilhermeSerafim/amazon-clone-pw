import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-items',
  imports: [],
  templateUrl: './box-items.component.html',
  styleUrl: './box-items.component.scss'
})
export class BoxItemsComponent {
  constructor(private router: Router) { }
  navigateToPageSummer() {
    this.router.navigate(['/summer']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}
