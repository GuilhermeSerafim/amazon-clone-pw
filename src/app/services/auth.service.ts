import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // json-server

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any | null> {
    return this.http
      .get<any[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
      .pipe(map(users => users.length > 0 ? users[0] : null));
  }

}