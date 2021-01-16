import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptDataTypeComponent } from './java-script-data-type.component';

describe('JavaScriptDataTypeComponent', () => {
  let component: JavaScriptDataTypeComponent;
  let fixture: ComponentFixture<JavaScriptDataTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptDataTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
