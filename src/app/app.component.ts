import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  template: `
    <app-header></app-header>
    <div class="content-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .content-wrapper {
      padding-top: 5rem; /* Space for the fixed header */
      min-height: calc(100vh - 5rem);
      background-color: var(--color-bg);
    }
  `]
})
export class AppComponent {
  title = 'Nexsha Studio';
}
