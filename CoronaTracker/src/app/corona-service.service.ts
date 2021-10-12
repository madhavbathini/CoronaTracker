import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CoronaServiceService {
  public apiData: string = 'https://api.covid19api.com/countries';
  // public url:string='https://api.covid19api.com/total/dayone/country/south-africa';
  constructor(private http: HttpClient) {}
  getData(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiData);
  }

  getCoronaRealTimeData(country: any): Observable<Country[]> {
    const url = 'https://api.covid19api.com/total/dayone/country/' + country;
    return this.http.get<Country[]>(url);
  }
}
