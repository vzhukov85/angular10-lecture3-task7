import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myControl = new FormControl();

  ngOnInit(): void {
    localStorage.setItem('options', JSON.stringify([]));
  }

  cache(value: string): void {
    console.log(value);
    const options: string[] = JSON.parse(localStorage.getItem('options'));
    if (options.indexOf(value) === -1) {
      options.push(value);
    }
    localStorage.setItem('options', JSON.stringify(options));
  }

  caches(): string[] {
    const options: string[] = JSON.parse(localStorage.getItem('options'));
    return options;
  }
}
