import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdQuizComponent } from './adhd-quiz.component';

describe('AdhdQuizComponent', () => {
  let component: AdhdQuizComponent;
  let fixture: ComponentFixture<AdhdQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhdQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhdQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
