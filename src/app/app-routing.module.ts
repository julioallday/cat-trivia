import { AcessoGuard } from './shared/guards/acesso.guard';
import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AcessoGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AcessoGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sem-acesso',
    component: SemAcessoComponent,
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%^&*()/\\])/
