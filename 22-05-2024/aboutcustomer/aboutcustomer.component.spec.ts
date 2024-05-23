import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcustomerComponent } from './aboutcustomer.component';

describe('AboutcustomerComponent', () => {
  let component: AboutcustomerComponent;
  let fixture: ComponentFixture<AboutcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
