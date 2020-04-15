import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Bobby';
  item = [{
    nama : "Bola",
    harga : 200000
  },{
    nama : "Boneka",
    harga : 20000
  }];
  itemArr = ['aa','bb','cc','dd'];
  show: boolean = true;
}
