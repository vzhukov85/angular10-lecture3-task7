import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cached]',
})
export class CachedDirective {
  CACHE_SIZE = 10;

  constructor() {
    if (JSON.parse(localStorage.getItem('options')) === null) {
      localStorage.setItem('options', JSON.stringify([]));
    }
  }

  @HostListener('keydown.enter', ['$event.target.value'])
  cache(value: string): void {
    console.log(value);
    const options: string[] = JSON.parse(localStorage.getItem('options'));
    if (options.indexOf(value) === -1) {
      options.push(value);
    }
    const count = Math.min(options.length, this.CACHE_SIZE);
    localStorage.setItem('options', JSON.stringify(options.slice(-count)));
  }
}
