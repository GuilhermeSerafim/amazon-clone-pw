import { Component } from '@angular/core';
import { HeaderSliderComponent } from "../../components/header-slider/header-slider.component";
import { BoxItemsComponent } from "../../components/box-items/box-items.component";

@Component({
  selector: 'app-home',
  imports: [HeaderSliderComponent, BoxItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
