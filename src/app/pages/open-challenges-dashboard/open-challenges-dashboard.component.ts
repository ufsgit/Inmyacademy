import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-open-challenges-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-challenges-dashboard.component.html',
  styleUrls: ['./open-challenges-dashboard.component.css']
})
export class OpenChallengesDashboardComponent implements OnInit {
  activeTab = 'home';
  participantName = 'Jordan Smith';
  selectedChallenge = 'Storytelling Challenge';
  registrationId = 'OC-2024-78934';

  ngOnInit(): void {
    const name = localStorage.getItem('openChallengeParticipantName');
    const challenge = localStorage.getItem('openChallengeSelectedChallenge');
    const regId = localStorage.getItem('openChallengeRegistrationId');

    if (name) this.participantName = name;
    if (challenge) this.selectedChallenge = challenge;
    if (regId) this.registrationId = regId;
  }
}
