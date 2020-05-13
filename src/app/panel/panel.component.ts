import { Component, OnInit, Injectable, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherApiService } from '../weather-api.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
@Injectable()
export class PanelComponent implements OnInit {
  public weatherSearchCity: FormGroup;
  public weatherData: any;
  public weatherImg: String;
  public isError: String;
  public enterCity: boolean;
  public cityNum: number = 0;
  public weatherFlag: boolean;
  public cityData: String;
  public interval: any;
  public updatedTime: String = 'Nil';

  constructor(
    private weatherService: WeatherApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.weatherSearchCity = this.formBuilder.group({
      location: ['']
    });

    interval(30000).subscribe(x => this.showWeatherData(this.cityData));
  }

  showWeatherDataTemplate() {
    this.weatherFlag = true;
  }

  showCityEnter() {
    if (this.cityNum > 1) {
      this.enterCity = false;
      this.cityNum = 0;
    } else {
      this.enterCity = true;
      this.cityNum++;
    }
  }

  showWeatherData(formValues) {
    this.isError = null;
    this.cityData = formValues;
    let city = formValues;

    var today = new Date();
    this.updatedTime =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.weatherService.getWeather(city).subscribe(
      data => (
        (this.weatherData = data),
        (this.weatherImg =
          '../../assets/' + this.weatherData.weather[0].main + '.jpg')
      ),
      error => (this.isError = 'Error... Please enter a city again!')
    );
    console.log(this.weatherData);
  }
}

// HTTP GET REQUEST: http://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=d1e2f5769bfd85e116a239a7335d3475&units=metric
