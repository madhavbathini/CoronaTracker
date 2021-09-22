import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CoronaServiceService {
  public apiData: string = 'https://api.covid19api.com/countries';
  constructor(private http: HttpClient) {}
  getData(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiData);
  }
}
