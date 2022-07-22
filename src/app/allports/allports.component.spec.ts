import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllportsComponent } from './allports.component';

describe('AllportsComponent', () => {
  let component: AllportsComponent;
  let fixture: ComponentFixture<AllportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
