import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLoginComponent } from './head-login.component';

describe('HeadLoginComponent', () => {
  let component: HeadLoginComponent;
  let fixture: ComponentFixture<HeadLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
