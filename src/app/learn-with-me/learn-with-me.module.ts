import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LearnWithMeComponent } from './learn-with-me.component';
import { LearnWithMeRoutingModule } from './learn-with-me.routing';
import { AwsComponent } from './aws/aws.component';
import { LearnWithMeContainerComponent } from './container/learn-with-me-container/learn-with-me-container.component';

@NgModule({
  declarations: [
    LearnWithMeComponent,
    AwsComponent,
    LearnWithMeContainerComponent,
  ],
  imports: [
    CommonModule,
    LearnWithMeRoutingModule
  ],
})
export class LearnWithMeModule { }