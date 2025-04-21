import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColourDirective } from './colour.directive';

@Component({
  template: `<h2 appColour>Hover me!</h2>`,
})
class TestComponent {}

describe('ColourDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColourDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance of ColourDirective', () => {
    const directiveEl = fixture.debugElement.query(
      By.directive(ColourDirective)
    );
    expect(directiveEl).toBeTruthy();
  });
  it('should apply blue background color on hover', () => {
    const el = fixture.nativeElement.querySelector('h2');

    el.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(el.style.backgroundColor).toBe('blue');

    el.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(el.style.backgroundColor).toBe('');
  });
});
