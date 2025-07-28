import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 3', () => {
    // A = Arrange
    const num1 = 1;
    const num2 = 2;

    // A = Actuar
    const result = num1 + num2;

    // A = Assert
    expect(result).toBe(3);
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title()).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render router-outlet wrapped with css class', () => {
    const divElement = compiled.querySelector('div');
    const cssClass =
      'min-w-screen min-h-screen bg-gray-600 flex items-center justify-center px-5 py-5'.split(
        ' '
      );

    const divClass = divElement?.classList;

    expect(divElement).toBeTruthy();
    cssClass.forEach((cssClassName) => {
      expect(divClass).toContain(cssClassName);
    });
  });

  it(`should contain the 'Buy me a beer' link`, () => {
    const linkElement = compiled.querySelector('a');
    const expectedHref = 'https://www.buymeacoffee.com/scottwindon';

    const href = linkElement?.getAttribute('href');
    const title = linkElement?.title;

    expect(linkElement).toBeTruthy();
    expect(href).toBe(expectedHref);
    expect(title).toBe('Buy me a beer');
  });
});
