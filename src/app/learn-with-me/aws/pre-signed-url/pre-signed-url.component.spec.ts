import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSignedUrlComponent } from './pre-signed-url.component';

describe('PreSignedUrlComponent', () => {
  let component: PreSignedUrlComponent;
  let fixture: ComponentFixture<PreSignedUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSignedUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSignedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
