import { Component } from '@angular/core';
import { CalculatorComponent } from "@calculator/components/calculator/calculator.component";

@Component({
  selector: 'app-calculator-view',
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  styleUrl: './calculator-view.component.css',
})
export default class CalculatorViewComponent {}
