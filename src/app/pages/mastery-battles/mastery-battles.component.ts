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
    { title: 'Cash Awards', subtitle: 'For Champions and top runners-up' },
    { title: 'Custom Trophies', subtitle: 'And framed certificates' },
    { title: 'Premium Course Access', subtitle: 'For top teams' },
    { title: 'Scholarship Pathways', subtitle: 'Via partner schools and programs' },
    { title: 'Industry Visits', subtitle: 'Virtual or in-person experiences' },
    { title: 'Digital Certificates', subtitle: 'For all approved participants' },
    { title: 'Sponsorship Introductions', subtitle: 'For outstanding teams' }
  ];

  perkIcons = [
    'M2 6h20v12H2zm10 8a2 2 0 100-4 2 2 0 000 4zm-6 0h.01M18 12h.01',
    'M9.937 15.5A2 2 0 008.5 14.063l-6.135-1.582a.5.5 0 010-.962L8.5 9.936A2 2 0 009.937 8.5l1.582-6.135a.5.5 0 01.963 0L14.063 8.5A2 2 0 0015.5 9.937l6.135 1.581a.5.5 0 010 .964L15.5 14.063a2 2 0 00-1.437 1.437l-1.582 6.135a.5.5 0 01-.963 0z',
    'M6 3h12l4 6-10 12-10-12z',
    'M22 10l-10-5-10 5 10 5zM6 12v5c3 3 9 3 12 0v-5',
    'M4 8h16v12H4zM8 8V6a2 2 0 012-2h4a2 2 0 012 2v2',
    'M12 22l-3-3-4 .5.5-4-3-3 3-3-.5-4 4-.5 3-3 3 3 4-.5-.5 4 3 3-3 3 .5 4-4 .5zM9 12l2 2 4-4',
    'M13 2L3 14h9l-1 8 10-12h-9z'
  ];

  scrollToTracks(): void {
    const el = document.getElementById('tracks-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  getSlug(title: string): string {
    return title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  }
}
