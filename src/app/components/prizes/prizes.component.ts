import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prizes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold mb-4 text-gray-900">Prizes and Perks</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ subtitle }}</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (perk of perks; track perk.id) {
            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm"
                   [ngStyle]="{'background-color': themeColor + '20', 'color': themeColor}">
                <!-- Generic star icon for perks -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-[{{themeColor}}] transition-colors">{{ perk.title }}</h3>
              <p class="text-gray-600 text-sm">{{ perk.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class PrizesComponent {
  @Input({ required: true }) subtitle: string = '';
  @Input({ required: true }) perks: {id: string, title: string, description: string}[] = [];
  @Input({ required: true }) themeColor: string = '';
}
