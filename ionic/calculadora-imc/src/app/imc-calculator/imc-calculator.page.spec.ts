import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ImcCalculatorPage } from './imc-calculator.page';

describe('ImcCalculatorPage', () => {
  let component: ImcCalculatorPage;
  let fixture: ComponentFixture<ImcCalculatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImcCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
