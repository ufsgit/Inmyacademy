import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { OPEN_CHALLENGES } from '../../data/challenges.data';

@Component({
  selector: 'app-open-challenges',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './open-challenges.component.html',
  styleUrls: ['./open-challenges.component.css']
})
export class OpenChallengesComponent {
  private router = inject(Router);
  challenges = OPEN_CHALLENGES;
  
  perks = [
    { id: 1, title: '£1,000 Cash Prize', subtitle: 'For each category champion' },
    { id: 2, title: 'Engraved Trophy', subtitle: 'And frame certificate.' },
    { id: 3, title: 'Flagship Course Access', subtitle: 'Complimentary for top 100 candidates.' },
    { id: 4, title: 'Scholarship Pathways', subtitle: 'Selected universities' },
    { id: 5, title: 'Industry Immersions', subtitle: 'Virtual or on-site visits' },
    { id: 6, title: 'Digital Certificates', subtitle: 'For every valid entry' },
    { id: 7, title: 'Sponsorship Pathways', subtitle: 'To sponsors connected' }
  ];

  getBadgeClasses(color: string): string {
    switch (color) {
      case 'green': return 'bg-[#ecfdf5] text-[#10b981] border border-[#a7f3d0]'; // emerald
      case 'blue': return 'bg-[#e0e7ff] text-[#4f46e5] border border-[#c7d2fe]'; // blue/indigo match screenshot
      case 'red': return 'bg-[#fef2f2] text-[#ef4444] border border-[#fecaca]'; // red
      case 'orange-outline': return 'bg-transparent text-[#f97316] border border-[#f97316]'; // open to all ages
      case 'orange':
      default: return 'bg-[#fff7ed] text-[#f97316] border border-[#fed7aa]'; // orange
    }
  }

  getIconSvg(iconName: string): string {
    switch (iconName) {
      case 'book-open':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>';
      case 'message-circle':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>';
      case 'lightbulb':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>';
      case 'smartphone':
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>';
      case 'chef-hat':
        // using an alternative generic icon for chef hat since lucide chef-hat isn't in standard heroicons, let's use a fire or star as fallback, or custom svg.
        // I will just construct a simple custom chef hat or plate.
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>';
      default:
        return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
    }
  }

  getPerkIcon(perkId: number): string {
    // Return different generic icons based on perk ID
    const icons = {
      1: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      2: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>',
      3: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>',
      4: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"></path>',
      5: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
      6: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>',
      7: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>'
    };
    return icons[perkId as keyof typeof icons] || icons[1];
  }

  enterChallenge(challenge: any) {
    this.router.navigate([
      '/skillstorm/challenges',
      challenge.slug
    ]);
  }

  scrollToChallenges() {
    const el = document.getElementById('challenges-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
