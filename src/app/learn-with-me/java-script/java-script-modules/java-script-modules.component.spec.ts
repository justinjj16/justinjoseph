import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptModulesComponent } from './java-script-modules.component';

describe('JavaScriptModulesComponent', () => {
  let component: JavaScriptModulesComponent;
  let fixture: ComponentFixture<JavaScriptModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
