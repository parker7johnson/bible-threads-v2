import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full',
  },
  {
    path : 'login',
    component : LoginComponent,
  },
  {
    path : 'landing',
    component : LandingComponent,
    children : [
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'read',
        component : ReadComponent
      },
      {
        path : 'read/:bookName/:bookId/:chapterId',
        component : ReadComponent
      },
      {
        path : 'discover',
        component : DiscoverComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
