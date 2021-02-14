import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwsComponent } from './aws.component';
import { PreSignedUrlComponent } from './pre-signed-url/pre-signed-url.component';
const routes: Routes = [
  {
    path: '',
    component: AwsComponent,
  },
  {
    path: 'preSignedUrl',
    component: PreSignedUrlComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AWSRoutingModule { }