import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersadmin',
  templateUrl: './usersadmin.page.html',
  styleUrls: ['./usersadmin.page.scss'],
})
export class UsersadminPage implements OnInit {
  listUsuarios: any;

  constructor(
    private _usuariosService: UsuarioService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getUsuarios();
  }

  // getUsuarios() {
  //   this._usuariosService.getUsuarios().subscribe((data) => this.listUsuarios = data.rows);
  // }

  getUsuarios() {
    this._usuariosService.getUsuarios().subscribe((data: { rows: any; }) => this.listUsuarios = data.rows);
  }
}
