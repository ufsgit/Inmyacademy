import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OPEN_CHALLENGES } from '../../data/challenges.data';
import { Challenge } from '../../data/competition.models';
import { ChallengeInfoCardsComponent } from '../../components/challenge-info-cards/challenge-info-cards.component';
import { CompetitionStepsComponent } from '../../components/competition-steps/competition-steps.component';
import { ScoringSystemComponent } from '../../components/scoring-system/scoring-system.component';
import { RewardsComponent } from '../../components/rewards/rewards.component';
import { RegistrationFormComponent } from '../../components/registration-form/registration-form.component';

@Component({
  selector: 'app-challenge-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ChallengeInfoCardsComponent,
    CompetitionStepsComponent,
    ScoringSystemComponent,
    RewardsComponent,
    RegistrationFormComponent
  ],
  templateUrl: './challenge-details.component.html',
  styleUrls: ['./challenge-details.component.css']
})
export class ChallengeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  challenge!: Challenge;
  notFound: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      const found = OPEN_CHALLENGES.find(c => c.slug === slug);
      if (found) {
        this.challenge = found;
        this.notFound = false;
        // Scroll to top on load/change
        window.scrollTo(0, 0);
      } else {
        this.notFound = true;
      }
    });
  }

  getIntroText(slug: string): string {
    if (this.challenge && this.challenge.entryFee === 25) {
      return `For Phase 1 assessment, prepare your project submission. Examples of acceptable entries include:`;
    }
    switch (slug) {
      case 'creative-storytelling-certificate':
        return 'Create a 1-2 minute video sharing your original tale. Examples include:';
      case 'global-oratory-and-communication-certificate':
        return 'Record a short speech on a topic that matters to you. Examples include:';
      case 'entrepreneurship-and-innovation-accelerator':
        return 'Pitch your startup or product idea in a sharp video. Examples include:';
      case 'app-design-and-logic-certification':
        return 'Present your app concept and design ideas in a short video. Examples include:';
      case 'quickchef-culinary-mastery-award':
        return 'Capture your cooking process and dish presentation. Examples include:';
      default:
        return 'Prepare your submission. Examples include:';
    }
  }

  getOutroText(slug: string): string {
    if (this.challenge && this.challenge.entryFee === 25) {
      return `Ensure your submission demonstrates clear structure, depth of reasoning, and conforms to all rules.`;
    }
    switch (slug) {
      case 'creative-storytelling-certificate':
        return 'Your story should show imagination, clear narration, and creative structure.';
      case 'global-oratory-and-communication-certificate':
        return 'Your speech should show clarity, confidence, and strong communication.';
      case 'entrepreneurship-and-innovation-accelerator':
        return 'Your pitch should clearly explain the problem, solution, and key features.';
      case 'app-design-and-logic-certification':
        return 'Your presentation should explain the app functionality and user experience.';
      case 'quickchef-culinary-mastery-award':
        return 'Your submission should show cooking techniques, time management, and final plating.';
      default:
        return 'Your submission should show high quality, creativity, and follow all instructions.';
    }
  }

  goBack(): void {
    if (this.challenge && this.challenge.entryFee === 25) {
      this.router.navigate(['/skillstorm/mastery-battles']);
    } else {
      this.router.navigate(['/skillstorm/open-challenges']);
    }
  }
}
