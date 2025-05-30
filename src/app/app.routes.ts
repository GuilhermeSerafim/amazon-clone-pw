import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SummerComponent } from './pages/summer/summer.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'summer', component: SummerComponent },
    { path: 'cart', component: CartComponent },
];
