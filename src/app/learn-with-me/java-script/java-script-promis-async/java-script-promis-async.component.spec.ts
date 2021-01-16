import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptPromisAsyncComponent } from './java-script-promis-async.component';

describe('JavaScriptPromisAsyncComponent', () => {
  let component: JavaScriptPromisAsyncComponent;
  let fixture: ComponentFixture<JavaScriptPromisAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaScriptPromisAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptPromisAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
