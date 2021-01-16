import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular.routing';

@NgModule({
  declarations: [AngularComponent],
  imports: [CommonModule, AngularRoutingModule]
})
export class AngularModule { }