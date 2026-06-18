import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-challenge-info-cards',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .info-card {
      background: #FFFFFF;
      border: 1px solid #E8E8E8;
      border-radius: 12px;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      flex: 1;
    }
    .card-title {
      font-size: 17px;
      font-weight: 700;
      color: #111111;
      margin-bottom: 8px;
      letter-spacing: 0.01em;
    }
    .card-value {
      font-size: 16px;
      font-weight: 400;
      color: #666666;
    }
  `],
  template: `
    <div style="display:flex; gap:16px; max-width:860px; margin:0 auto 40px auto; width:100%; padding:0 24px;">
      <div class="info-card">
        <div class="card-title">Age Group</div>
        <div class="card-value">{{ ageGroup }}</div>
      </div>
      <div class="info-card">
        <div class="card-title">Entry Fee</div>
        <div class="card-value">£{{ entryFee }}</div>
      </div>
      <div class="info-card">
        <div class="card-title">Format</div>
        <div class="card-value">{{ format }}</div>
      </div>
    </div>
  `
})
export class ChallengeInfoCardsComponent {
  @Input() ageGroup: string = '';
  @Input() entryFee: number = 0;
  @Input() format: string = '';
}
