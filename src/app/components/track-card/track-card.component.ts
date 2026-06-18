import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Track } from '../../data/competition.models';

@Component({
  selector: 'app-track-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
      <h3 class="text-xl font-bold text-gray-900 mb-6 group-hover:text-[{{themeColor}}] transition-colors h-14">{{ track.title }}</h3>
      
      <div class="space-y-4 mb-8 flex-grow">
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full" [ngStyle]="{'background-color': themeColor}"></span>
            Phase 1
          </h4>
          <p class="text-sm font-medium text-gray-800">{{ track.phase1Task }}</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full" [ngStyle]="{'background-color': themeColor}"></span>
            Grand Finale
          </h4>
          <p class="text-sm font-medium text-gray-800">{{ track.finaleTask }}</p>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 mt-4">Extras</h4>
          <p class="text-sm font-medium text-gray-800">{{ track.extras }}</p>
        </div>
      </div>
      
      <button class="w-full py-3 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1 hover:shadow-lg mt-auto"
              [ngStyle]="{'background-color': themeColor}">
        Enter for £25
      </button>
    </div>
  `
})
export class TrackCardComponent {
  @Input({ required: true }) track!: Track;
  @Input({ required: true }) themeColor: string = '';
}
