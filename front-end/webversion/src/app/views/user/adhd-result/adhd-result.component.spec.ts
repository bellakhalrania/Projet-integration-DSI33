import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdResultComponent } from './adhd-result.component';

describe('AdhdResultComponent', () => {
  let component: AdhdResultComponent;
  let fixture: ComponentFixture<AdhdResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhdResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhdResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
