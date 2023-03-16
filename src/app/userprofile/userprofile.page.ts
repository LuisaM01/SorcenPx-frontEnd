import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
  infoCliente: any[] = [];
  profileId = String;
  id: any = String;
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    this.http
      .get(`https://sorcenpx.up.railway.app/api/usuarios/${this.id}`)
      .subscribe(({ id_usuarios, apellido, nombre, correo }: any) : Array<any> => {
        const nombreCompleto: String = `${nombre.charAt(0).toUpperCase() + nombre.slice(1)} ${apellido.charAt(0).toUpperCase() + apellido.slice(1)}`
        return (this.infoCliente = [{id_usuarios, nombreCompleto, correo}]);
      });
  }
}
