import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvestComponent } from './new-invest.component';

describe('NewInvestComponent', () => {
  let component: NewInvestComponent;
  let fixture: ComponentFixture<NewInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
