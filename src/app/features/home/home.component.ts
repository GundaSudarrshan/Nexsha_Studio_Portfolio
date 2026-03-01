import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { PresentationMode } from '../../models/portfolio.model';
import { PresentationToggleComponent } from './presentation-toggle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PresentationToggleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  portfolio = inject(PortfolioService);
  selectedMode = signal('sketch');

  readonly presentationModes = computed(() => {
    const modes = this.portfolio.presentationModes();
    if (modes.length > 0) {
      return modes;
    }
    const fallbackImage = this.portfolio.projects()[0]?.imageUrl;
    return [
      { key: 'sketch', label: 'Sketch', imageUrl: fallbackImage, caption: 'Early concept and massing' },
      { key: 'render', label: 'Render', imageUrl: fallbackImage, caption: 'Material and lighting exploration' },
      { key: 'reality', label: 'Reality', imageUrl: fallbackImage, caption: 'Built outcome on site' }
    ] as PresentationMode[];
  });

  selectMode(key: string) {
    this.selectedMode.set(key);
  }
}
