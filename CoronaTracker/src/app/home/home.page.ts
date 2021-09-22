import { Component } from '@angular/core';
import { CoronaServiceService } from '../corona-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: any;
  constructor(private corona: CoronaServiceService) {}
  ngOnInit() {
    this.corona.getData().subscribe((data) => {
      console.log(data);
      this.countries = data;
    });
  }
}
