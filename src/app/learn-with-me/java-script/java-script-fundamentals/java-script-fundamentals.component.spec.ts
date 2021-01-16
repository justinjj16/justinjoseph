import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptFundamentalsComponent } from './java-script-fundamentals.component';

describe('JavaScriptFundamentalsComponent', () => {
  let component: JavaScriptFundamentalsComponent;
  let fixture: ComponentFixture<JavaScriptFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
