import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortfolioData } from '../../models/portfolio.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private http = inject(HttpClient);
  private dataUrl = 'assets/data/portfolio-data.json';

  // Signals for state
  private portfolioState = signal<PortfolioData | null>(null);

  // Computed properties
  readonly studio = computed(() => this.portfolioState()?.studio);
  readonly founders = computed(() => this.portfolioState()?.founders || []);
  readonly projects = computed(() => this.portfolioState()?.projects || []);
  readonly services = computed(() => this.portfolioState()?.services || []);
  readonly socialLinks = computed(() => this.portfolioState()?.socialLinks || []);
  readonly presentationModes = computed(() => this.portfolioState()?.studio.presentationModes || []);

  constructor() {
    this.loadData();
  }

  private async loadData() {
    try {
      const data = await firstValueFrom(this.http.get<PortfolioData>(this.dataUrl));
      if (data) {
        this.portfolioState.set(data);
      }
    } catch (error) {
      console.error('Failed to load portfolio data:', error);
    }
  }
}
