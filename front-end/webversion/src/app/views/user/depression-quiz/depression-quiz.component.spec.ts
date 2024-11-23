import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionQuizComponent } from './depression-quiz.component';

describe('DepressionQuizComponent', () => {
  let component: DepressionQuizComponent;
  let fixture: ComponentFixture<DepressionQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepressionQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepressionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
