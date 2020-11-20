import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myControl = new FormControl();

  caches(): string[] {
    const options: string[] = JSON.parse(localStorage.getItem('options'));
    return options;
  }
}
