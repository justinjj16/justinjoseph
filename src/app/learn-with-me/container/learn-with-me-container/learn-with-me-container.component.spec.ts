import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnWithMeContainerComponent } from './learn-with-me-container.component';

describe('LearnWithMeContainerComponent', () => {
  let component: LearnWithMeContainerComponent;
  let fixture: ComponentFixture<LearnWithMeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnWithMeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnWithMeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
