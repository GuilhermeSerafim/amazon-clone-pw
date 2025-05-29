import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addItemToCart(item: CartItem): Observable<CartItem> {
    this.incrementTotalItemsCart();
    return this.http.post<CartItem>(`${this._apiUrl}/itemsCart`, item);
  }

  getTotalItemsInCart(): Observable<{ totalItemsInCart: number }> {
    return this.http.get<{ totalItemsInCart: number }>(`${this._apiUrl}/totalItemsInCart`);
  }

  incrementTotalItemsCart(): void {
    this.getTotalItemsInCart().subscribe(currentTotal => {
      const newTotal = currentTotal.totalItemsInCart + 1;
      this.http.put(`${this._apiUrl}/totalItemsInCart`, { totalItemsInCart: newTotal }).subscribe();
    });
  }
}
