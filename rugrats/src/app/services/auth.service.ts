import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'formData';

  setData(data: any) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getData() {
    const data = sessionStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }
  
  clearData() {
    sessionStorage.removeItem(this.storageKey);
  }
}
