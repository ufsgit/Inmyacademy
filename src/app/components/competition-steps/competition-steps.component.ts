import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-steps',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:60px 24px; background:#FFF6F6; border-top:1px solid #EBEBEB; font-family:'Poppins','Inter',sans-serif;">
      <div style="max-width:900px; margin:0 auto;">
        <h2 style="font-size:24px; font-weight:700; color:#000000; margin:0 0 28px 0;">How the Competition Works</h2>
        
        <div style="display:flex; flex-direction:column; gap:14px;">
          @for (step of steps; track $index) {
            <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:10px; padding:20px 24px; display:flex; align-items:center; gap:18px; box-shadow:0 1px 6px rgba(0,0,0,0.06);">
              <div style="width:38px; height:38px; border-radius:8px; background:#2563EB; display:flex; align-items:center; justify-content:center; color:#ffffff; font-weight:800; font-size:16px; flex-shrink:0;">
                {{ $index + 1 }}
              </div>
              <div style="font-size:16px; font-weight:600; color:#111111; line-height:1.5;">
                {{ step }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class CompetitionStepsComponent implements OnChanges {
  @Input() slug: string = '';
  @Input() entryFee: number = 1;
  steps: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slug'] || changes['entryFee']) {
      this.generateSteps();
    }
  }

  private generateSteps() {
    let mediaType = 'speech video';
    if (this.slug === 'creative-storytelling-certificate') {
      mediaType = 'storytelling video';
    } else if (this.slug === 'entrepreneurship-and-innovation-accelerator') {
      mediaType = 'pitch video';
    } else if (this.slug === 'app-design-and-logic-certification') {
      mediaType = 'app design video';
    } else if (this.slug === 'quickchef-culinary-mastery-award') {
      mediaType = 'cooking video';
    } else if (this.slug === 'diplomatic-policy-leadership') {
      mediaType = 'policy pitch or debate video';
    } else if (this.slug === 'legal-advocacy-professional') {
      mediaType = 'mock-trial or advocacy video';
    } else if (this.slug === 'advanced-research-publication') {
      mediaType = 'research abstract or presentation';
    } else if (this.slug === 'digital-media-strategy') {
      mediaType = 'digital media piece or article';
    } else if (this.slug === 'entrepreneurial-visionary-accelerator') {
      mediaType = 'business pitch video';
    } else if (this.slug === 'executive-project-management') {
      mediaType = 'project plan or presentation';
    } else if (this.slug === 'global-communication-mastery') {
      mediaType = 'communication analysis video';
    } else if (this.slug === 'digital-systems-architecture') {
      mediaType = 'system design architecture plan';
    } else if (this.slug === 'investment-banking-elite') {
      mediaType = 'financial model or presentation';
    }

    this.steps = [
      `Register and complete the £${this.entryFee} entry payment`,
      'Receive access to the submission dashboard',
      `Upload your ${mediaType}`,
      'Receive your personal QR support code',
      'Share your code to gather Support Likes'
    ];
  }
}
