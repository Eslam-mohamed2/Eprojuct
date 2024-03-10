import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyresComponent } from './verifyres.component';

describe('VerifyresComponent', () => {
  let component: VerifyresComponent;
  let fixture: ComponentFixture<VerifyresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyresComponent]
    });
    fixture = TestBed.createComponent(VerifyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
