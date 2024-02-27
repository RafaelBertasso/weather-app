import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from './../../../models/interfaces/weather.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  //Dados da previsão do tempo recebidos pelo componente pai

  // nomeDado! -> inicializar o dado como null
  @Input() WeatherDatasInput!: WeatherDatas

  minTemperatureIcon = faTemperatureLow
  maxTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind
}
