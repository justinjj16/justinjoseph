import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaScriptComponent } from './java-script.component';
import { JavaScriptIntroductionComponent } from './java-script-introduction/java-script-introduction.component';
import { JavaScriptFundamentalsComponent } from './java-script-fundamentals/java-script-fundamentals.component';
import { JavaScriptObjetsComponent } from './java-script-objets/java-script-objets.component';
import { JavaScriptDataTypeComponent } from './java-script-data-type/java-script-data-type.component';
import { JavaScriptPromisAsyncComponent } from './java-script-promis-async/java-script-promis-async.component';
import { JavaScriptModulesComponent } from './java-script-modules/java-script-modules.component';
const routes: Routes = [
  {
    path: '',
    component: JavaScriptComponent,
  },
  {
    path: 'introduction',
    component: JavaScriptIntroductionComponent
  },
  {
    path: 'fundamentals',
    component: JavaScriptFundamentalsComponent
  },
  {
    path: 'objects',
    component: JavaScriptObjetsComponent
  },
  {
    path: 'dataType',
    component: JavaScriptDataTypeComponent
  },
  {
    path: 'promise',
    component: JavaScriptPromisAsyncComponent
  },
  {
    path: 'modules',
    component: JavaScriptModulesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaScriptRoutingModule { }