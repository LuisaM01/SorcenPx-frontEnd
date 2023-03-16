import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../interfaces/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private MyAppUrl: string;
  private MyApiUrl: string;


  constructor(private http: HttpClient) { 
    this.MyAppUrl = environment.endpoint
    this.MyApiUrl = 'api'
  }

  register(usuario: Usuarios): Observable<any> {
    return this.http.post(`${this.MyAppUrl}${this.MyApiUrl}/auth/register`, usuario)
  }

  login(usuario: Usuarios): Observable<string> {
    return this.http.post<string>(`${this.MyAppUrl}${this.MyApiUrl}/auth/login`, usuario)
  }

  getUsuarios(): Observable<any> {
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<any>(`${this.MyAppUrl}${this.MyApiUrl}/usuarios`, { headers: headers })
    // return this.http.get<Usuarios[]>(`${this.MyAppUrl}${this.MyApiUrl}/usuarios`)
  }
} 
