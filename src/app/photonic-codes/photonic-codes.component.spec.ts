import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotonicCodesComponent } from './photonic-codes.component';

describe('PhotonicCodesComponent', () => {
  let component: PhotonicCodesComponent;
  let fixture: ComponentFixture<PhotonicCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotonicCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotonicCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
