import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExercicesComponent } from './list-exercices.component';

describe('ListExercicesComponent', () => {
  let component: ListExercicesComponent;
  let fixture: ComponentFixture<ListExercicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListExercicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
