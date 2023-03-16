import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private MyAppUrl: string;
  private MyApiUrl: string;


  constructor(private http: HttpClient) { 
    this.MyAppUrl = environment.endpoint
    this.MyApiUrl = 'api/vehiculos'
  }

}
