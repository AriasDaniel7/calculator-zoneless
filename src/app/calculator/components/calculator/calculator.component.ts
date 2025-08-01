import {
  Component,
  computed,
  HostListener,
  inject,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(this.calculatorService.resultText);
  public subResultText = computed(this.calculatorService.subResultText);
  public lastOperator = computed(this.calculatorService.lastOperator);

  handleClick(key: string) {
    this.calculatorService.constructNumber(key);
  }

  // get resultText() {
  //   return this.calculatorService.resultText();
  // }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '/': '÷',
      Enter: '=',
    };

    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    });
  }
}
