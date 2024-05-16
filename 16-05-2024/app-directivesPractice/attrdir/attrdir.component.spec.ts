import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrdirComponent } from './attrdir.component';

describe('AttrdirComponent', () => {
  let component: AttrdirComponent;
  let fixture: ComponentFixture<AttrdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrdirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttrdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
