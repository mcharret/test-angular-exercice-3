import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get('assets/transactions.json');
  }

  getTransactionDetails(id: string): Observable<any> {
    return this.http.get(`assets/transaction-${id}.json`);
  }
}
