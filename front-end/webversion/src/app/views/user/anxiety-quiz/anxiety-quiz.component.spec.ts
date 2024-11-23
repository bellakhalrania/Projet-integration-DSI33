import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyQuizComponent } from './anxiety-quiz.component';

describe('AnxietyQuizComponent', () => {
  let component: AnxietyQuizComponent;
  let fixture: ComponentFixture<AnxietyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnxietyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
