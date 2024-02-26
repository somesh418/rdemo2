import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ShareserviceService } from 'src/app/services/shareservice.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(public api: ApiServiceService, public shared: ShareserviceService) { }
  public apiid: string = 'd4594364698122bfd1c4b3eb5f2ff19f';
  public cityname: string = '';
  public daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  public cityList: any = [];
  public weatherInformation: any;
  public count: any;
  /*Remove City name from list */
  removeCity(idx: number) {
    this.cityList.splice(idx, 1);
  }

  /*Check city name valid or not */
  isValidCity() {
    if (this.cityname && this.cityname.length > 0) {
      this.api.getAPIData(`https://api.openweathermap.org/geo/1.0/direct?q=${this.cityname}&appid=${this.apiid}`).subscribe(
        (res) => {
          this.cityname = '';
          if (res && res.length > 0) {
            this.getLatestData(res[0])
            if (this.cityList.length == 8) {
              this.cityList.splice(7, 1);
            }
            this.cityList.unshift(res[0]);
          } else {
            alert('Invalid City Name');
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }

  }

  /*Remove All cities */
  removeAllCities() {
    this.cityList = [];
    this.weatherInformation = {};
  }

  /*Set default forecast image*/
  setDefaultPic(event: any, icon: any) {
    event.target.src = `http://openweathermap.org/img/wn/${icon}.png`
  }


  /*Get Latest data */
  getLatestData(obj: any) {
    //https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1708704333221&appid=d4594364698122bfd1c4b3eb5f2ff19f
    this.api.getAPIData(`https://api.openweathermap.org/data/2.5/forecast?cnt=1&units=metric&lat=${obj.lat}&lon=${obj.lon}&appid=${this.apiid}`).subscribe(
      (res) => {
        if (res && res.list && res.list.length > 0) {
          obj.temp = res.list[0].main.temp;
          obj.main = res.list[0].weather[0].main;
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  /*get weather forecast information */
  getData(cityDetails: any) {
    this.api.getAPIData(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${cityDetails.lat}&lon=${cityDetails.lon}&appid=${this.apiid}`).subscribe(
      (res) => {
        let groupData = _.groupBy(res.list, (item: any) => item.dt_txt.substr(0, 10));
        let source = _.map(groupData, (value: any, key: any) => {
          let day = new Date(key).getDay();
          return { date: key, data: value[0], day: this.daysList[day] }
        });
        res.list = source;
        this.weatherInformation = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.count = this.shared.getData();
  }

}
