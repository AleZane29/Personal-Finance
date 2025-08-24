import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Transaction } from '../interfaces/transactions';
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  apiUrlIncome = 'http://localhost:3000/income';
  apiUrlExpense = 'http://localhost:3000/expense';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return forkJoin([
      this.http.get<Transaction[]>(this.apiUrlIncome),
      this.http.get<Transaction[]>(this.apiUrlExpense),
    ]).pipe(map(([income, expense]) => [...income, ...expense]));
  }

  GetAllIncome(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrlIncome);
  }
  GetAllExpense(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrlExpense);
  }

  GetIncome(tranId: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiUrlIncome + '/' + tranId);
  }
  GetExpense(tranId: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiUrlExpense + '/' + tranId);
  }

  CreateIncome(data: Transaction) {
    return this.http.post(this.apiUrlIncome, data);
  }
  CreateExpense(data: Transaction) {
    return this.http.post(this.apiUrlExpense, data);
  }

  UpdateIncome(data: Transaction) {
    return this.http.put(this.apiUrlIncome + '/' + data.id, data);
  }
  UpdateExpense(data: Transaction) {
    return this.http.put(this.apiUrlExpense + '/' + data.id, data);
  }

  DeleteIncome(empId: number) {
    return this.http.delete(this.apiUrlIncome + '/' + empId);
  }
  DeleteExpense(empId: number) {
    return this.http.delete(this.apiUrlExpense + '/' + empId);
  }
}
