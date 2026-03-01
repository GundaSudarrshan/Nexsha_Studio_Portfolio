import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, computed } from '@angular/core';
import { PresentationMode } from '../../models/portfolio.model';

@Component({
  selector: 'app-presentation-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-toggle.component.html',
  styleUrls: ['./presentation-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationToggleComponent {
  @Input() modes: PresentationMode[] = [];
  @Input() selectedKey = '';
  @Output() selectedKeyChange = new EventEmitter<string>();

  get activeMode(): PresentationMode | undefined {
    if (!this.modes.length) {
      return undefined;
    }
    return this.modes.find((mode) => mode.key === this.selectedKey) ?? this.modes[0];
  }

  selectMode(key: string) {
    this.selectedKey = key;
    this.selectedKeyChange.emit(key);
  }

  indicatorLeft() {
    if (this.modes.length <= 1 || !this.activeMode) {
      return 0;
    }
    const currentIndex = Math.max(
      0,
      this.modes.findIndex((mode) => mode.key === this.activeMode?.key)
    );
    return (currentIndex * 100) / (this.modes.length - 1);
  }
}
