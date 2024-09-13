import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSpinnerComponent } from './green-spinner.component';

describe('GreenSpinnerComponent', () => {
  let component: GreenSpinnerComponent;
  let fixture: ComponentFixture<GreenSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
