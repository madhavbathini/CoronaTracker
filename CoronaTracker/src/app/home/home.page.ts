import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoronaServiceService } from '../corona-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public countries: any;
  public coronaData: any;
  public country: any;
  public active: Number;
  public confirmed: Number;
  public deaths: Number;
  private loading: any;

  constructor(
    private corona: CoronaServiceService,
    private loadingCtrl: LoadingController
  ) {}
  ngOnInit() {
    this.corona.getData().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }
  getcoronaData() {
    this.loadingCtrl.create({ message: 'Please Wait...!' }).then((overlay) => {
      this.loading = overlay;
      this.loading.present();
    });
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
    this.corona.getCoronaRealTimeData(this.country).subscribe((data) => {
      console.log(data);
      var index = data.length - 1;
      this.active = data[index].Active;
      this.confirmed = data[index].Confirmed;
      this.deaths = data[index].Deaths;
    });
  }
}
