import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAddsComponent } from './body-adds.component';

describe('BodyAddsComponent', () => {
  let component: BodyAddsComponent;
  let fixture: ComponentFixture<BodyAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
