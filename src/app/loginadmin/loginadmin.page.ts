import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
})
export class LoginadminPage implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back();
  }
}
