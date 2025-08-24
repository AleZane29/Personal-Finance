import { Injectable } from '@angular/core';
import { Categories } from '../interfaces/categories';
import { Transaction } from '../interfaces/transactions';

@Injectable({
  providedIn: 'root',
})
export class LocalStore {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  //#region Transactions
  public saveTransInc(value: Transaction[]) {
    localStorage.setItem('TransactionsIncome', JSON.stringify(value));
  }
  public saveTransExp(value: Transaction[]) {
    localStorage.setItem('TransactionsExpense', JSON.stringify(value));
  }

  public getTransInc(): Transaction[] {
    let data: string = '';
    try {
      data = localStorage.getItem('TransactionsIncome') || '';
    } catch (error) {}
    if (data == '') {
      return [];
    }
    return JSON.parse(data);
  }
  public getTransExp(): Transaction[] {
    let data: string = '';
    try {
      data = localStorage.getItem('TransactionsExpense') || '';
    } catch (error) {}
    if (data == '') {
      return [];
    }
    return JSON.parse(data);
  }
  //#endregion
  //#region Categories
  public saveCategories(value: Categories[]) {
    localStorage.setItem('Categories', JSON.stringify(value));
  }

  public getCategories(): Categories[] {
    let data: string = '';
    try {
      data = localStorage.getItem('Categories') || '';
    } catch (error) {}
    if (data == '') {
      return [];
    }
    return JSON.parse(data);
  }
  //#endregion
  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
