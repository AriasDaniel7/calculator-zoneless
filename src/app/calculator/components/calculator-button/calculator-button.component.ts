import {
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {
  onClick = output<string>();
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  isPressed = signal(false);

  isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  isNumber = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // @HostBinding('class.w-2/4')
  // get commandStyle() {
  //   return this.isDoubleSize();
  // }

  handleClick() {
    const button = this.contentValue()?.nativeElement;

    if (!button) {
      return;
    }

    this.onClick.emit(button.innerText.trim());
  }

  keyboardPressedStyle(key: string) {
    const button = this.contentValue()?.nativeElement;
    if (!button) return;

    const value = button.innerText.trim();

    if (value !== key) return;

    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }
}
