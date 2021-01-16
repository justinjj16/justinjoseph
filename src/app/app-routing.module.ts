import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'learn-with-me',
    loadChildren: () => import('./learn-with-me/learn-with-me.module').then(mod => mod.LearnWithMeModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
