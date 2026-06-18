import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full text-white py-4 px-6 rounded-xl shadow-lg mt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-semibold"
         [ngStyle]="{'background-color': themeColor}">
      @for (stat of stats; track stat) {
        <div class="flex items-center gap-2">
          <span>{{ stat }}</span>
          @if (!$last) {
            <span class="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-white/50 ml-4 md:ml-12"></span>
          }
        </div>
      }
    </div>
  `
})
export class StatsBarComponent {
  @Input({ required: true }) stats: string[] = [];
  @Input({ required: true }) themeColor: string = '';
}
