import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class LocalStore {
  private themeSubject = new BehaviorSubject<string>(
    this.getData('Theme') || 'light'
  );
  public theme$ = this.themeSubject.asObservable();

  constructor() {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
    if (key === 'Theme') {
      this.themeSubject.next(value);
    }
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
    if (!this.isBrowser()) return '';
    return localStorage.getItem(key) || '';
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
