import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LearnWithMeComponent } from './learn-with-me.component';
import { LearnWithMeRoutingModule } from './learn-with-me.routing';
import { AwsComponent } from './aws/aws.component';

@NgModule({
  declarations: [
    LearnWithMeComponent,
    AwsComponent,
  ],
  imports: [
    CommonModule,
    LearnWithMeRoutingModule
  ],
})
export class LearnWithMeModule { }