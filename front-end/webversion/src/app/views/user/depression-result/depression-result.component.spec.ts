import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionResultComponent } from './depression-result.component';

describe('DepressionResultComponent', () => {
  let component: DepressionResultComponent;
  let fixture: ComponentFixture<DepressionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepressionResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepressionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
