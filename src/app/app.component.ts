import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundoComponent } from './shared/ola-mundo/ola-mundo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OlaMundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
