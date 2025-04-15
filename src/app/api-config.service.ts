import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:3000'; 
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options = {}){
    return this.httpClient.get<T>(`${this.API_BASE_URL}/${url}`, options);
  }

  post<T>(url: string, data: Object, options = {}){
    return this.httpClient.post<T>(`${this.API_BASE_URL}/${url}`, data, options);
  }

  put<T>(url: string, data: Object, options = {}){
    return this.httpClient.put<T>(`${this.API_BASE_URL}/${url}`, data, options);
  }

  delete<T>(url: string, options = {}){
    return this.httpClient.delete<T>(`${this.API_BASE_URL}/${url}`, options);
  }
}
