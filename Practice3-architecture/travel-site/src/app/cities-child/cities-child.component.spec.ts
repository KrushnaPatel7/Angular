import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesChildComponent } from './cities-child.component';

describe('CitiesChildComponent', () => {
  let component: CitiesChildComponent;
  let fixture: ComponentFixture<CitiesChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesChildComponent]
    });
    fixture = TestBed.createComponent(CitiesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
