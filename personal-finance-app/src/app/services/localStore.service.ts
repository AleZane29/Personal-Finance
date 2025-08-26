import { Injectable } from '@angular/core';
import { Category } from '../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class LocalStore {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  //#region Categories
  public saveCategories(value: Category[]) {
    localStorage.setItem('Categories', JSON.stringify(value));
  }

  public getCategories(): Category[] {
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
