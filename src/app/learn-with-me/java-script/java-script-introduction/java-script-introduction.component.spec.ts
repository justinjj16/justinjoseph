import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptIntroductionComponent } from './java-script-introduction.component';

describe('JavaScriptIntroductionComponent', () => {
  let component: JavaScriptIntroductionComponent;
  let fixture: ComponentFixture<JavaScriptIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
