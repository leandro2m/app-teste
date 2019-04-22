import { Injectable } from '@angular/core';
import {LocalStorage } from '../@core/local-storage';
import {environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  public refreshToken: string;
  public tokenTs: any;
  public current: any;

  constructor( private httpClient: HttpClient,

    ) {
      this.load();
    }

  public checkAuth() {
    // tslint:disable-next-line:radix
    this.tokenTs = parseInt(localStorage.getItem('tokenTs'));
    // tslint:disable-next-line:radix
    this.current = Date.now();
    const time = this.current.valueOf();
    // tslint:disable-next-line:radix
    const timeout = time - this.tokenTs;
    if (timeout < 3600000) {
      if (this.token) {
        return true;
      }
    } else {
      return false;
  }
}

  getToken(): string {
    return this.token;
  }

  public login(authData) {
    return new Promise((resolve, reject) => {
      const url = environment.apiUrl + 'auth/login';
      this.httpClient.post(url, authData).subscribe(response => {
        this.token = response['token'];
        this.refreshToken = response['refreshToken'];
        this.tokenTs = Date.now();
        console.log('response of authentication', response);
        this.save();
        resolve();
      }, err => {
        this.logout();
      });
    });
  }

  public logout() {
    return new Promise((resolve, reject) => {
      this.clear();
      resolve();
    });
  }

  public save() {
    LocalStorage.set('token', this.token);
    LocalStorage.set('refreshToken', this.refreshToken);
    LocalStorage.set('tokenTs', this.tokenTs);
  }

  public load() {
    this.token = LocalStorage.get('token');
    this.refreshToken = LocalStorage.get('refreshToken');
  }

  public clear() {
    this.token = null;
    this.refreshToken = null;
    LocalStorage.remove('token');
    LocalStorage.remove('refreshToken');
  }

}
