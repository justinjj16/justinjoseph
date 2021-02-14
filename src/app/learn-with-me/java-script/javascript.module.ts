import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { JavaScriptRoutingModule } from './javascript.routing';
import { JavaScriptComponent } from './java-script.component';
import { JavaScriptIntroductionComponent } from './java-script-introduction/java-script-introduction.component';
import { JavaScriptFundamentalsComponent } from './java-script-fundamentals/java-script-fundamentals.component';
import { JavaScriptObjetsComponent } from './java-script-objets/java-script-objets.component';
import { JavaScriptDataTypeComponent } from './java-script-data-type/java-script-data-type.component';
import { JavaScriptPromisAsyncComponent } from './java-script-promis-async/java-script-promis-async.component';
import { JavaScriptModulesComponent } from './java-script-modules/java-script-modules.component';

@NgModule({
  declarations: [
    JavaScriptComponent,
    JavaScriptIntroductionComponent,
    JavaScriptFundamentalsComponent,
    JavaScriptObjetsComponent,
    JavaScriptDataTypeComponent,
    JavaScriptPromisAsyncComponent,
    JavaScriptModulesComponent
  ],
  imports: [
    CommonModule,
    JavaScriptRoutingModule,
    MarkdownModule.forRoot()
  ],
})
export class JavaScriptModule { }