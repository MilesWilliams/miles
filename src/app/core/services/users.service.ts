import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../config/app.config';
import { Order } from '../interfaces/order.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api: string = AppConfig.baseApi;
  private endpoint: string = "users"

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    const url: string = `${this.api}/${this.endpoint}`;

    return this._http.get<User[]>(url).pipe(
      catchError(err => throwError(err.error))
    )
  }

  public getUserOrdersByID(id: string): Observable<Order[]> {
    const url: string = `${this.api}/${this.endpoint}/${id}/orders`;

    return this._http.get<Order[]>(url).pipe(
      catchError(err => throwError(err.error))
    )
  }
}
