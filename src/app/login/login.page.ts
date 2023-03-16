import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Usuarios } from '../interfaces/usuarios';
import { UsuarioService } from '../services/usuario.service';

import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = '';
  contrasena: string = '';

  constructor(
    private router: Router,
    private _location: Location,
    private toastController: ToastController,
    private alertController: AlertController,
    private _usuarioService: UsuarioService,
    private loadingCtrl: LoadingController
    ) { }
  ngOnInit() {
  }

  async login() {
    /* Validamos que el usuario ingrese datos */
    if(this.correo == ''|| this.contrasena == ''){
      const alert = await this.alertController.create({
        header: 'Lo sentimos!!',
        message: 'Debe diligenciar todos los campos',
        buttons: ['OK'],
      });

      await alert.present();
      return;
    }

    /* Creamos el body */
    const usuarios: Usuarios ={
      correo: this.correo,
      contrasena: this.contrasena,
      nombre: '',
      apellido: ''
    }

    const loading = await this.loadingCtrl.create({
      message: 'Porfavor espere...',
      duration: 500,
      spinner: 'circles',
    });

    loading.present();

    this._usuarioService.login(usuarios).subscribe({
      next: async (token) => {
        this.router.navigate(['/tabs/vehiculos'])
        localStorage.setItem('token', token)
        console.log(`Inicio de sesion exitoso tu token es: ${token}`);
        const toast = await this.toastController.create({
          message: 'Inicio de sesion exitoso!',
          duration: 1000,
          position: 'top',
        });
        await toast.present();
      },
      error: (e: HttpErrorResponse) => {
        this.msjError(e)
      }
    })
  }

  async msjError(e: HttpErrorResponse) {
    if (e.error.message) {
      const alert = await this.alertController.create({
        header: 'Error!!',
        message: e.error.message,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error!!',
        message:
          'ha ocurrido un error inesperado, por favor, comuniquese con el administrador',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  goBack(){
    this._location.back();
  }
}
