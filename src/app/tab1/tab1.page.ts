import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fechaHoy = "";

  constructor() {}


  ngOnInit() {
    var todayLocal = new Date(); //  for now
    var FechaLocal = ('0' + todayLocal.getDate()).slice(-2) + '-' + ('0' + (todayLocal.getMonth() + 1)).slice(-2) + '-' + todayLocal.getFullYear();
    this.fechaHoy = FechaLocal;
  }

  

}
