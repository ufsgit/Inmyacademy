import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scoring-system',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:80px 24px; background:#FFFFFF; border-top:1px solid #EBEBEB; font-family:'Kumbh Sans',sans-serif;">
      <div style="max-width:900px; margin:0 auto;">
        <h2 style="font-size:28.8px; font-weight:700; color:#000000; margin:0 0 32px 0; font-family:'Gilmer', 'DM Sans', sans-serif;">Scoring System</h2>
        
        <div style="background:#FFFFFF; border:1.6px solid rgba(117,119,131,0.21); border-radius:20px; padding:40px 44px; box-shadow:none;">
          <!-- Formula Banner -->
          <div style="background:#EBEBEB; border-radius:12px; padding:20px 24px; text-align:center; font-size:18px; font-weight:600; color:#020101; margin-bottom:40px;">
            Final Score = ( Merit Score × 0.80 ) + ( Normalized Likes × 0.20 )
          </div>
          
          <!-- Columns -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:48px;">
            <!-- Merit Score Column -->
            <div>
              <h3 style="font-size:21px; font-weight:700; color:#000000; margin:0 0 16px 0; font-family:'Gilmer', 'DM Sans', sans-serif;">Merit Score - 80%</h3>
              <p style="font-size:18px; color:#757783; font-weight:400; margin:0 0 20px 0;">Judges evaluate:</p>
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:16px;">
                @for (crit of criteria; track crit) {
                  <li style="display:flex; align-items:flex-start; gap:12px;">
                    <span style="width:8px; height:8px; border-radius:50%; background:#D41101; flex-shrink:0; margin-top:8px; display:inline-block;"></span>
                    <span style="font-size:18px; color:#020101; font-weight:400; line-height:1.6;">{{ crit }}</span>
                  </li>
                }
              </ul>
            </div>
            
            <!-- Support Likes Column -->
            <div>
              <h3 style="font-size:21px; font-weight:700; color:#000000; margin:0 0 16px 0; font-family:'Gilmer', 'DM Sans', sans-serif;">Support Likes - 20%</h3>
              <p style="font-size:18px; color:#757783; font-weight:400; margin:0 0 20px 0;">&nbsp;</p> <!-- Spacing alignment -->
              <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:16px;">
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:8px; height:8px; border-radius:50%; background:#D41101; flex-shrink:0; margin-top:8px; display:inline-block;"></span><span style="font-size:18px; color:#020101; font-weight:400; line-height:1.6;">Each £1 contribution = 1 like</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:8px; height:8px; border-radius:50%; background:#D41101; flex-shrink:0; margin-top:8px; display:inline-block;"></span><span style="font-size:18px; color:#020101; font-weight:400; line-height:1.6;">Maximum 50 support likes counted</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:8px; height:8px; border-radius:50%; background:#D41101; flex-shrink:0; margin-top:8px; display:inline-block;"></span><span style="font-size:18px; color:#020101; font-weight:400; line-height:1.6;">Normalized to fairness</span></li>
                <li style="display:flex; align-items:flex-start; gap:12px;"><span style="width:8px; height:8px; border-radius:50%; background:#D41101; flex-shrink:0; margin-top:8px; display:inline-block;"></span><span style="font-size:18px; color:#020101; font-weight:400; line-height:1.6;">Share your QR code</span></li>
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
