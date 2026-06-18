import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-competitions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './school-competitions.component.html',
  styleUrls: ['./school-competitions.component.css']
})
export class SchoolCompetitionsComponent {
  activePlan: string = 'full';

  perks = [
    { title: 'Cash Awards', subtitle: 'For Champions and top runners-up', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Custom Trophies', subtitle: 'And framed certificates', icon: '' },
    { title: 'Premium Course Access', subtitle: 'For top teams', icon: '' },
    { title: 'Scholarship Pathways', subtitle: 'Via partner schools and programs', icon: '' },
    { title: 'Industry Visits', subtitle: 'Virtual or in-person experiences', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { title: 'Digital Certificates', subtitle: 'For all approved participants', icon: '' },
    { title: 'Sponsorship Introductions', subtitle: 'For outstanding teams', icon: '' }
  ];
}
