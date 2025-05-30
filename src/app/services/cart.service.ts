import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _apiUrl = 'http://localhost:3000';
  private _totalItems$ = new BehaviorSubject<number>(0);

  totalItems$ = this._totalItems$.asObservable();

  constructor(private http: HttpClient) {
    this.loadTotalItems();
  }

  private loadTotalItems(): void {
    this.http.get<{ totalItemsInCart: number }>(`${this._apiUrl}/totalItemsInCart`)
      .subscribe({
        next: res => this._totalItems$.next(res.totalItemsInCart),
        error: () => this._totalItems$.next(0)
      });
  }

  // tap() é útil quando você quer fazer algo (efeito colateral) sem mexer no valor que está passando no fluxo.
  addItemToCart(cardItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${this._apiUrl}/itemsCart`, cardItem).pipe(
      tap(() => this.incrementTotalItems())
    );
  }

  getTotalItemsInCart(): Observable<{ totalItemsInCart: number }> {
    return this.http.get<{ totalItemsInCart: number }>(`${this._apiUrl}/totalItemsInCart`);
  }

  incrementTotalItems(): void {
    this.getTotalItemsInCart().subscribe({
      next: currentTotal => {
        const newTotal = currentTotal.totalItemsInCart + 1;
        this.http.put(`${this._apiUrl}/totalItemsInCart`, { totalItemsInCart: newTotal }).subscribe(() => {
          this._totalItems$.next(newTotal);
        });
      }
    });
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this._apiUrl}/itemsCart`);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/itemsCart/${id}`).pipe(
      tap(() => this.decrementTotalItems()) // atualiza o total dinamicamente
    );
  }

  private decrementTotalItems(): void {
    this.getTotalItemsInCart().subscribe({
      next: currentTotal => {
        const newTotal = Math.max(0, currentTotal.totalItemsInCart - 1); // serve para garantir que o total de itens no carrinho nunca fique negativo.
        this.http.put(`${this._apiUrl}/totalItemsInCart`, { totalItemsInCart: newTotal }).subscribe(() => {
          this._totalItems$.next(newTotal);
        });
      }
    });
  }


}
