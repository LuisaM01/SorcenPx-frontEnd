import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.page.html',
  styleUrls: ['./registervehicle.page.scss'],
})
export class RegistervehiclePage implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  goBack(){
    this._location.back();
  }
}
