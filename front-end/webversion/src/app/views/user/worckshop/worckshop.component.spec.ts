import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorckshopComponent } from './worckshop.component';

describe('WorckshopComponent', () => {
  let component: WorckshopComponent;
  let fixture: ComponentFixture<WorckshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorckshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorckshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
