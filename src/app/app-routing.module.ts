import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'roles',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'registervehicle',
    loadChildren: () => import('./registervehicle/registervehicle.module').then( m => m.RegistervehiclePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'roles',
    loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'usersadmin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./usersadmin/usersadmin.module').then( m => m.UsersadminPageModule,)
  },
  {
    path: 'userprofile/:id',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'vehicleprofile',
    loadChildren: () => import('./vehicleprofile/vehicleprofile.module').then( m => m.VehicleprofilePageModule)
  },
  {
    path: 'adminvehicleprofile',
    loadChildren: () => import('./adminvehicleprofile/adminvehicleprofile.module').then( m => m.AdminvehicleprofilePageModule)
  },

  /* {
    path: '**',
    redirectTo: 'home'
  }, */
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
