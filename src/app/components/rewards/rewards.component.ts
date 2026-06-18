import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding:60px 24px; background:#FFF6F6; border-top:1px solid #EBEBEB; font-family:'Poppins','Inter',sans-serif;">
      <div style="max-width:900px; margin:0 auto;">
        <h2 style="font-size:24px; font-weight:700; color:#000000; margin:0 0 28px 0;">What You Can Win</h2>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px;">
          <!-- Card 1: Prize -->
          <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:16px; padding:36px 24px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.06);">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin-bottom:16px;">
              <circle cx="32" cy="32" r="30" fill="#FFFBEB"/>
              <path d="M44 20H40V16H24V20H20C17.79 20 16 21.79 16 24V28C16 32.42 19.58 36 24 36H26.34C28.2 38.38 31.02 40 34.34 40H29.66C32.98 40 35.8 38.38 37.66 36H40C44.42 36 48 32.42 48 28V24C48 21.79 46.21 20 44 20ZM20 28V24H24V28.68C21.69 28.14 20 28 20 28ZM44 28C44 28 42.31 28.14 40 28.68V24H44V28ZM32 40C29.79 40 28 41.79 28 44V46H36V44C36 41.79 34.21 40 32 40ZM28 48H36V50H28V48Z" fill="#F59E0B"/>
            </svg>
            <div style="font-size:18px; font-weight:800; color:#111111; margin-bottom:6px;">{{ rewards[0] || '£100 Prize' }}</div>
            <div style="font-size:14px; color:#6B6B6B; font-weight:500;">{{ rewards[1] || 'Champion Prize' }}</div>
          </div>

          <!-- Card 2: Recognition -->
          <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:16px; padding:36px 24px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.06);">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin-bottom:16px;">
              <circle cx="32" cy="32" r="30" fill="#EFF6FF"/>
              <path d="M22 14L28 28H36L42 14" stroke="#EF4444" stroke-width="3" stroke-linecap="round"/>
              <path d="M26 14L32 28L38 14" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>
              <circle cx="32" cy="36" r="12" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="2"/>
              <text x="32" y="40" font-family="'Inter', sans-serif" font-weight="900" font-size="12" fill="#4B5563" text-anchor="middle">2</text>
            </svg>
            <div style="font-size:18px; font-weight:800; color:#111111; margin-bottom:6px;">{{ rewards[2] || 'Recognition' }}</div>
            <div style="font-size:14px; color:#6B6B6B; font-weight:500;">{{ rewards[3] || 'Global Acknowledgment' }}</div>
          </div>

          <!-- Card 3: Certificate -->
          <div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:16px; padding:36px 24px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; box-shadow:0 2px 10px rgba(0,0,0,0.06);">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin-bottom:16px;">
              <circle cx="32" cy="32" r="30" fill="#FFFBEB"/>
              <rect x="22" y="18" width="20" height="28" rx="2" fill="#FFFFFF" stroke="#D97706" stroke-width="2"/>
              <line x1="26" y1="24" x2="38" y2="24" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
              <line x1="26" y1="29" x2="38" y2="29" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
              <line x1="26" y1="34" x2="34" y2="34" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
              <circle cx="32" cy="40" r="3" fill="#D97706"/>
              <path d="M30 43L32 46L34 43" stroke="#D97706" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <div style="font-size:18px; font-weight:800; color:#111111; margin-bottom:6px;">{{ rewards[4] || 'Certificate' }}</div>
            <div style="font-size:14px; color:#6B6B6B; font-weight:500;">{{ rewards[5] || 'Official Award' }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RewardsComponent {
  @Input() rewards: string[] = [];
}
