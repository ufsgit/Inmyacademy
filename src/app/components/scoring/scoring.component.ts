import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scoring',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-900 text-white relative overflow-hidden">
      <!-- Decorative background elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-3xl" [ngStyle]="{'background-color': themeColor}"></div>
        <div class="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full blur-3xl" [ngStyle]="{'background-color': themeColor}"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold mb-4">How Scoring Works</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">Our unique dual-scoring system ensures fairness and community engagement.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Project Merit -->
          <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-colors">
            <div class="text-5xl font-extrabold mb-4" [ngStyle]="{'color': themeColor}">65%</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Project Merit</h3>
            <p class="text-gray-400 mb-6">Judged by an expert panel based on creativity, logic, and presentation.</p>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Originality & Innovation</li>
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Problem-solving Logic</li>
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Clarity & Communication</li>
            </ul>
          </div>
          
          <!-- Community Support -->
          <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-colors">
            <div class="text-5xl font-extrabold mb-4" [ngStyle]="{'color': themeColor}">35%</div>
            <h3 class="text-2xl font-bold mb-4 text-white">Lift Support (Community)</h3>
            <p class="text-gray-400 mb-6">Gather votes and "Lifts" from peers, friends, and the global community.</p>
            <ul class="space-y-2 text-sm text-gray-300">
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg> Public Votes</li>
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg> Peer Reviews</li>
              <li class="flex items-center gap-2"><svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg> Engagement Metrics</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gray-950 p-6 rounded-xl border border-gray-800 text-center">
          <p class="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Final Score Formula</p>
          <code class="text-xl md:text-2xl font-mono text-white bg-gray-800 px-6 py-3 rounded-lg inline-block border border-gray-700 shadow-inner">
            Final Score = (Merit Score × 0.65) + (Lift Support × 0.35)
          </code>
        </div>
      </div>
    </section>
  `
})
export class ScoringComponent {
  @Input({ required: true }) themeColor: string = '';
}
