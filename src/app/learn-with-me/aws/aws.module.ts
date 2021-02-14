import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { AWSRoutingModule } from './aws.routing';
import { PreSignedUrlComponent } from './pre-signed-url/pre-signed-url.component';

@NgModule({
  declarations: [

    PreSignedUrlComponent],
  imports: [
    CommonModule,
    AWSRoutingModule,
    MarkdownModule.forRoot()
  ],
})
export class AWSModule { }