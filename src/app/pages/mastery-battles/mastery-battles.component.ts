import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mastery-battles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mastery-battles.component.html',
  styleUrls: ['./mastery-battles.component.css']
})
export class MasteryBattlesComponent {
  tracks = [
    {
      id: 1,
      title: 'Diplomatic Policy Leadership',
      description: 'Dive into governance, diplomacy, and global relations — from public policy and civic leadership to persuasive debate and campaign strategy.',
      phase1: 'Submit a policy pitch or debate video for shortlisting',
      final: 'Shine in live negotiations and panel diplomacy rounds',
      extras: 'Policy templates and access to virtual youth summits'
    },
    {
      id: 2,
      title: 'Legal Advocacy Professional',
      description: 'Understand justice systems, legal research, case writing, and courtroom communication.',
      phase1: 'Submit a mock-trial or advocacy video',
      final: 'Face live legal argument sessions with expert judges',
      extras: 'Legal writing guides and virtual courtroom workshops'
    },
    {
      id: 3,
      title: 'Advanced Research Publication',
      description: 'Apply real-world science and engineering skills — from research design to data storytelling.',
      phase1: 'Submit a research abstract or visualisation',
      final: 'Defend your findings live before academic judges',
      extras: 'Research toolkits and academic publishing resources'
    },
    {
      id: 4,
      title: 'Digital Media Strategy',
      description: 'Create high-impact media content — mastering storytelling, editing, branding, and campaign strategy.',
      phase1: 'Submit a digital media piece or article',
      final: 'Present your live strategy to industry professionals',
      extras: 'Media starter packs and virtual journalism labs'
    },
    {
      id: 5,
      title: 'Entrepreneurial Visionary Accelerator',
      description: 'Turn ideas into ventures — explore innovation, market research, finance basics, and pitching mastery.',
      phase1: 'Submit a business pitch video',
      final: 'Pitch live to industry guests and investors',
      extras: 'Business plan templates and mentorship opportunities'
    },
    {
      id: 6,
      title: 'Executive Project Management',
      description: 'Master leadership, time management, risk handling, and execution excellence.',
      phase1: 'Submit a project plan or simulation',
      final: 'Perform live project briefs under real constraints',
      extras: 'Leadership frameworks and project templates'
    },
    {
      id: 7,
      title: 'Global Communication Mastery',
      description: 'Develop confident communication through structured speech, presentation, and persuasive dialogue.',
      phase1: 'Submit a communication analysis video',
      final: 'Participate in live panel discussions',
      extras: 'Public speaking guides and debate resources'
    },
    {
      id: 8,
      title: 'Digital Systems Architecture',
      description: 'Design the future — from coding logic and software design to complex system building.',
      phase1: 'Submit a system design architecture plan',
      final: 'Defend your architecture live before technical experts',
      extras: 'Coding templates and cloud architecture credits'
    },
    {
      id: 9,
      title: 'Investment Banking Elite',
      description: 'Understand global finance — investment banking, markets, M&A, ethics, and modelling.',
      phase1: 'Submit a financial model or market analysis',
      final: 'Present a live M&A pitch to finance professionals',
      extras: 'Financial modelling templates and industry reports'
    }
  ];

  perks = [
    { title: '£20,000 Prize Pool', subtitle: 'Shared across categories' },
    { title: 'Cash + Trophy + Certificate', subtitle: 'For top finalists' },
    { title: 'Premium Course Access', subtitle: 'For top finalists' },
    { title: 'Scholarship Pathways', subtitle: 'Via partner schools and programmes' },
    { title: 'Industry Introductions', subtitle: 'In-person or virtual experiences' },
    { title: 'Digital Certificates', subtitle: 'For all approved participants' },
    { title: 'Sponsorship Introductions', subtitle: 'For outstanding teams' }
  ];

  perkIcons = [
    'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    'M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l-9-5m9 5l9-5',
    'M12 14l9-5-9-5-9 5 9 5z',
    'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    'M13 10V3L4 14h7v7l9-11h-7z'
  ];

  scrollToTracks(): void {
    const el = document.getElementById('tracks-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  getSlug(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  }
}
