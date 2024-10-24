import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolisteComponent } from './todoliste.component';

describe('TodolisteComponent', () => {
  let component: TodolisteComponent;
  let fixture: ComponentFixture<TodolisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
