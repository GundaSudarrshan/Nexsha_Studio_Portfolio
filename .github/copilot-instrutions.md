## 🤖 Project Overview

This is a modern Angular-based portfolio application for **Nexsha Studio**, built using the latest **Angular 20** features. The project emphasizes high performance, minimal bundle sizes, and a sophisticated "Blackbox" architectural aesthetic. It leverages **Signals** for reactive state management and **Zoneless Change Detection** for optimal performance. This is a Client-Side Rendered (CSR) application optimized for static hosting.

## Stack

- **Frontend**: Angular 20 (Latest Stable)
- **Reactivity**: Angular Signals (input, output, model, computed)
- **Change Detection**: Zoneless (Experimental/Stable in v20)
- **Build Tools**: Angular CLI 20, esbuild/Vite-based application builder
- **Styling**: SCSS (Bespoke/Custom), CSS Custom Properties, Responsive Design principles
- **Data Management**: JSON-driven architecture for "Real-time" content updates
- **Deployment**: Optimized for Vercel/GitHub Pages

## 📁 Project Structure Guidelines

### Application Architecture

- **Core**: `src/app/core/` - Global services (e.g., `PortfolioService`), interceptors, and guards.
- **Features**: `src/app/features/` - Main site sections (e.g., `home`, `projects`) implemented as standalone components.
- **Layout**: `src/app/layout/` - Structural components like `HeaderComponent` and `FooterComponent`.
- **Models**: `src/app/models/` - TypeScript interfaces defining the `PortfolioData` schema.
- **Assets/Data**: `public/assets/data/` - Centralized JSON store for all portfolio content.
- **Styles**: `src/styles/` - Global SCSS, variables, and typography.

### Package Dependencies

#### Core Dependencies

```json
{
  "@angular/core": "^20.0.0",
  "@angular/common": "^20.0.0",
  "rxjs": "^7.8.0"
}
```

## 🏗️ Architecture Patterns

### Modern Standalone Component Pattern (Signal-based)

```typescript
// project-card.component.ts
import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Project } from "../../models/portfolio.model";

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent {
  // Use Signal-based inputs
  project = input.required<Project>();
  
  // Use Signal-based outputs
  viewDetails = output<string>();

  onViewDetails() {
    this.viewDetails.emit(this.project().id);
  }
}
```

### Signal-Driven Service Pattern

```typescript
// core/services/portfolio.service.ts
import { Injectable, signal, computed, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PortfolioData } from "../../models/portfolio.model";

@Injectable({ providedIn: "root" })
export class PortfolioService {
  private http = inject(HttpClient);
  
  // State managed via Signals
  private state = signal<PortfolioData | null>(null);

  // Derived state via Computed Signals
  readonly projects = computed(() => this.state()?.projects ?? []);
  readonly studio = computed(() => this.state()?.studio);

  constructor() {
    this.loadData();
  }

  private loadData() {
    this.http.get<PortfolioData>('assets/data/portfolio-data.json')
      .subscribe(data => this.state.set(data));
  }
}
```

## 📝 Coding Standards

### Angular 20 Conventions

- **Signals First**: Prefer `signal`, `computed`, and `effect` over manual RxJS subscriptions where possible for UI state.
- **Standalone Components**: Everything is a standalone component (default in v20).
- **Zoneless-ready**: Avoid logic that relies on `zone.js`. Use `ChangeDetectionStrategy.OnPush` or `provideZonelessChangeDetection()`.
- **Clean Structure**: Separate templates (`.html`) and styles (`.scss`) for non-trivial components to maintain readability.
- **Strict Typing**: Maintain 100% type safety in Models and Services.

### Component Organization

```typescript
// 1. Imports
import { Component, inject, input } from "@angular/core";

// 2. Component Decorator
@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"],
})
// 3. Class Definition
export class FeatureComponent {
  // 4. Injectors
  private dataService = inject(DataService);

  // 5. Signal Inputs/Outputs
  data = input<string>();

  // 6. Methods (Logic)
}
```
