import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyResultComponent } from './anxiety-result.component';

describe('AnxietyResultComponent', () => {
  let component: AnxietyResultComponent;
  let fixture: ComponentFixture<AnxietyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnxietyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
