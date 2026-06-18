import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Challenge } from '../../data/competition.models';

@Component({
  selector: 'app-challenge-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <div class="mb-4">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold"
              [ngStyle]="{'background-color': themeColor + '20', 'color': themeColor}">
          {{ challenge.ageGroup }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[{{themeColor}}] transition-colors">{{ challenge.title }}</h3>
      <p class="text-gray-600 text-sm mb-6 flex-grow">{{ challenge.description }}</p>
      
      <div class="space-y-4 mb-8">
        <div>
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Your Task</h4>
          <p class="text-sm font-medium text-gray-800">{{ challenge.task }}</p>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Earn</h4>
          <p class="text-sm font-medium text-gray-800">{{ challenge.earn }}</p>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Extras</h4>
          <p class="text-sm font-medium text-gray-800">{{ challenge.extras }}</p>
        </div>
      </div>
      
      <button class="w-full py-3 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-lg mt-auto"
              [ngStyle]="{'background-color': themeColor}">
        Enter for £1
      </button>
    </div>
  `
})
export class ChallengeCardComponent {
  @Input({ required: true }) challenge!: Challenge;
  @Input({ required: true }) themeColor: string = '';
}
