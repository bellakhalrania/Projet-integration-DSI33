import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfrontComponent } from './userfront.component';

describe('UserfrontComponent', () => {
  let component: UserfrontComponent;
  let fixture: ComponentFixture<UserfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserfrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
