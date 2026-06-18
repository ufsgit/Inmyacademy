import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pricing } from '../../data/competition.models';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border h-full flex flex-col"
         [ngClass]="pricing.isPopular ? 'border-2 scale-105 z-10' : 'border-gray-100'"
         [ngStyle]="pricing.isPopular ? {'border-color': themeColor} : {}">
      
      @if (pricing.isPopular) {
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md"
             [ngStyle]="{'background-color': themeColor}">
          Most Popular
        </div>
      }
      
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ pricing.title }}</h3>
      <div class="text-4xl font-extrabold mb-6" [ngStyle]="{'color': themeColor}">{{ pricing.price }}</div>
      <p class="text-gray-600 mb-8 flex-grow">{{ pricing.description }}</p>
      
      <button class="w-full py-3 rounded-lg font-bold transition-all mt-auto border-2"
              [ngClass]="pricing.isPopular ? 'text-white shadow-md hover:shadow-lg transform hover:-translate-y-1' : 'bg-transparent hover:bg-gray-50'"
              [ngStyle]="pricing.isPopular ? {'background-color': themeColor, 'border-color': themeColor} : {'color': themeColor, 'border-color': themeColor}">
        Select Plan
      </button>
    </div>
  `
})
export class PricingCardComponent {
  @Input({ required: true }) pricing!: Pricing;
  @Input({ required: true }) themeColor: string = '';
}
