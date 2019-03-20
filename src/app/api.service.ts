import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://demo.wazinsure.com:3002/api/countries'

  constructor(private httpClient: HttpClient) {}
    getCountries(){
      return this.httpClient.get(`http://demo.wazinsure.com:3002/api/countries`);
    }
}
