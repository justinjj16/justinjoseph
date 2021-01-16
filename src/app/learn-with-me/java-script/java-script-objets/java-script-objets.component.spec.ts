import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptObjetsComponent } from './java-script-objets.component';

describe('JavaScriptObjetsComponent', () => {
  let component: JavaScriptObjetsComponent;
  let fixture: ComponentFixture<JavaScriptObjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptObjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptObjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
