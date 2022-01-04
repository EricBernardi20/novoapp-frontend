import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddsComponent } from './modal-adds.component';

describe('ModalAddsComponent', () => {
  let component: ModalAddsComponent;
  let fixture: ComponentFixture<ModalAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
