import { Component } from '@angular/core';
import { HeaderSliderComponent } from "../../components/header-slider/header-slider.component";
import { BoxItemsComponent } from "../../components/box-items/box-items.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderSliderComponent, BoxItemsComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
