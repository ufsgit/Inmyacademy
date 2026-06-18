import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scoring-system',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:60px 24px; background:#FFF6F6; border-top:1px solid #EBEBEB; font-family:'Poppins','Inter',sans-serif;">
      <div style="max-width:900px; margin:0 auto;">
        <h2 style="font-size:24px; font-weight:700; color:#000000; margin:0 0 28px 0;">Scoring System</h2>
        
        <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:14px; padding:40px 44px; box-shadow:0 2px 10px rgba(0,0,0,0.06);">
          <!-- Formula Banner -->
          <div style="background:#EFEFEF; border-radius:8px; padding:18px 24px; text-align:center; font-size:15px; font-weight:600; color:#333333; margin-bottom:36px;">
            Final Score = ( Merit Score × 0.80 ) + ( Normalized Likes × 0.20 )
          </div>
          
          <!-- Columns -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:44px;">
            <!-- Merit Score Column -->
            <div>
              <h3 style="font-size:17px; font-weight:700; color:#000000; margin:0 0 12px 0;">Merit Score - 80%</h3>
              <p style="font-size:15px; color:#666666; margin:0 0 16px 0;">Judges evaluate:</p>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px;">
                @for (crit of criteria; track crit) {
                  <li style="display:flex; align-items:flex-start; gap:12px;">
                    <span style="width:7px; height:7px; border-radius:50%; background:#AAAAAA; flex-shrink:0; margin-top:7px; display:inline-block;"></span>
                    <span style="font-size:15px; color:#666666; line-height:1.55;">{{ crit }}</span>
                  </li>
                }
              </ul>
            </div>
            
            <!-- Support Likes Column -->
            <div>
              <h3 style="font-size:17px; font-weight:700; color:#000000; margin:0 0 18px 0;">Support Likes - 20%</h3>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px;">
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:7px; height:7px; border-radius:50%; background:#AAAAAA; flex-shrink:0; margin-top:7px; display:inline-block;"></span><span style="font-size:15px; color:#666666; line-height:1.55;">Each £1 contribution = 1 like</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:7px; height:7px; border-radius:50%; background:#AAAAAA; flex-shrink:0; margin-top:7px; display:inline-block;"></span><span style="font-size:15px; color:#666666; line-height:1.55;">Maximum 50 support likes counted</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:7px; height:7px; border-radius:50%; background:#AAAAAA; flex-shrink:0; margin-top:7px; display:inline-block;"></span><span style="font-size:15px; color:#666666; line-height:1.55;">Normalized to fairness</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:7px; height:7px; border-radius:50%; background:#AAAAAA; flex-shrink:0; margin-top:7px; display:inline-block;"></span><span style="font-size:15px; color:#666666; line-height:1.55;">Share your QR code</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ScoringSystemComponent {
  @Input() criteria: string[] = [];
}
