import {
  Component,
  ChangeDetectionStrategy,
  DestroyRef,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly portfolio   = inject(PortfolioService);
  private readonly destroyRef = inject(DestroyRef);

  /** Reactive state — both consumed in template via signal() calls */
  readonly isScrolled = signal(false);
  readonly menuOpen   = signal(false);

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      // Lock body scroll when overlay is open
      this.destroyRef.onDestroy(() => {
        document.body.style.overflow = '';
      });
    }
  }

  // ── Scroll detection (runs inside Angular's zone via HostListener) ──
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  // ── Menu controls ──────────────────────────────────────────
  toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = next ? 'hidden' : '';
    }
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
