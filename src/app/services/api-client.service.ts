import { Injectable } from '@angular/core';
import {AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  get(endpoint) {
    return new Promise((resolve, reject) => {
      const url = environment.apiUrl + endpoint;
      this.httpClient.get(url, {headers: this.getHeaders()}).subscribe(response => {
        resolve(response);
      });
    });
  }

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      const url = environment.apiUrl + endpoint;
      this.httpClient.post(url, data, {headers: this.getHeaders()}).subscribe(response => {
        resolve(response);
      });
    });
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('X-Authorization', 'Bearer ' + this.authService.getToken());
  }

}
