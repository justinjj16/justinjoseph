import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnWithMeComponent } from './learn-with-me.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: LearnWithMeComponent,
//     children: [
//       {
//         path: 'javaScript',
//         loadChildren: () => import('./java-script/javascript.module').then(mod => mod.JavaScriptModule),
//       },
//       {
//         path: 'angular',
//         loadChildren: () => import('./angular/angular.module').then(mod => mod.AngularModule)
//       }
//     ]
//   }
// ];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'learn-with-me',
    pathMatch: 'full',
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