import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/authentication/auth.guards';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./@module/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home', loadChildren: () => import('./@module/home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '**', loadChildren: () => import('./@module/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
