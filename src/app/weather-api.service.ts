import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}
  getWeather(location) {
    let apiKey = 'd1e2f5769bfd85e116a239a7335d3475';
    let url =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      location +
      '&appid=' +
      apiKey +
      '&units=metric';
    return this.http.get(url);
  }
}
