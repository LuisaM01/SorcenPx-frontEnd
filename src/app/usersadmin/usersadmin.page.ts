import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersadmin',
  templateUrl: './usersadmin.page.html',
  styleUrls: ['./usersadmin.page.scss'],
})
export class UsersadminPage implements OnInit {
  usuarios = [];

  constructor(
    private _usuariosService: UsuarioService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.getUsuarios();


    // this.http.get<any>("https://sorcenpx.up.railway.app/api/usuarios")
    // .subscribe(({ rows }) => {   
    //   const usuariosNombre = rows.map((item: any) => item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1));
    //   return this.usuarios = usuariosNombre;
    // })
  }

  getUsuarios() {
    this._usuariosService.getUsuarios().subscribe(data => {
      console.log(data);
    })
  }

}
