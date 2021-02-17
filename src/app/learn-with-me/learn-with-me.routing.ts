import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnWithMeComponent } from './learn-with-me.component';
import { LearnWithMeContainerComponent } from './container/learn-with-me-container/learn-with-me-container.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component:LearnWithMeContainerComponent
  },
  {
    path: '',
    component: LearnWithMeComponent,
    children: [
      {
        path: 'javaScript',
        loadChildren: () => import('./java-script/javascript.module').then(mod => mod.JavaScriptModule),
      },
      {
        path: 'angular',
        loadChildren: () => import('./angular/angular.module').then(mod => mod.AngularModule),
      },
      {
        path: 'aws',
        loadChildren: () => import('./aws/aws.module').then(mod => mod.AWSModule),
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnWithMeRoutingModule { }