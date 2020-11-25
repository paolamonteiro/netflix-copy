import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
