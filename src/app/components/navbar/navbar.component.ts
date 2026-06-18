import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [`
    .nav-dropdown-link { display:block; padding:12px 24px; font-size:14px; font-weight:600; color:#1f2937; text-decoration:none; transition:background 0.1s, color 0.1s; white-space:nowrap; }
    .nav-dropdown-link:hover { background:#2D3192; color:#ffffff; }
    .nav-dropdown-link.active-nav-link { background:#2D3192 !important; color:#ffffff !important; font-weight:700; }
  `],
  template: `
    <nav class="bg-white shadow-md w-full sticky top-0 z-[9999] transition-transform duration-300"
         [class.-translate-y-full]="isHidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24 items-center">
          <!-- Logo -->
          <img src="assets/Logo-resized.svg" alt="inmyacademy logo" class="h-[75px] w-auto cursor-pointer" routerLink="/" />
          
          <!-- Right Side: Desktop Menu & Button -->
          <div class="hidden md:flex items-center gap-10">
            <!-- Navigation Links -->
            <div class="flex items-center gap-6">
              <a href="#" class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors">Home</a>
              <a href="#" class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors">About Us</a>
              <a href="#" class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors">Courses</a>
              
              <!-- Dropdown Menu -->
              <div class="relative group h-full flex items-center" (mouseenter)="isDropdownOpen = true" (mouseleave)="isDropdownOpen = false">
                <button class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors flex items-center gap-1"
                        (click)="isDropdownOpen = !isDropdownOpen"
                        [class.text-[#2D3192]]="isDropdownOpen">
                  SkillStorm Global Competitions
                  <svg class="w-4 h-4 transition-transform duration-200" [class.rotate-180]="isDropdownOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                <!-- Dropdown Panel -->
                @if (isDropdownOpen) {
                  <div style="position:absolute; left:0; top:100%; width:260px; background:#ffffff; border-radius:0; box-shadow:0 8px 24px rgba(0,0,0,0.15); overflow:hidden; z-index:10000;">
                    <div style="display:flex; flex-direction:column;">
                      <a routerLink="/skillstorm/open-challenges"
                         routerLinkActive="active-nav-link"
                         [routerLinkActiveOptions]="{exact: true}"
                         class="nav-dropdown-link">
                         Global Open Challenges
                      </a>
                      <a routerLink="/skillstorm/mastery-battles"
                         routerLinkActive="active-nav-link"
                         [routerLinkActiveOptions]="{exact: true}"
                         class="nav-dropdown-link">
                         Global Mastery Battles
                      </a>
                      <a routerLink="/skillstorm/school-competitions"
                         routerLinkActive="active-nav-link"
                         [routerLinkActiveOptions]="{exact: true}"
                         class="nav-dropdown-link">
                         Global School Competitions
                      </a>
                    </div>
                  </div>
                }
              </div>
              
              <a href="#" class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors">Blog</a>
              <a href="#" class="text-gray-800 hover:text-[#2D3192] font-bold text-[16px] transition-colors">Contact</a>
            </div>
            
            <!-- Action Button -->
            <button class="bg-[#2D3192] hover:bg-opacity-90 text-white px-8 py-2.5 rounded text-[15px] font-bold transition-all shadow-sm">Get Started</button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
             <button class="text-gray-600 hover:text-blue-600 focus:outline-none" (click)="isMobileMenuOpen = !isMobileMenuOpen">
               <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
               </svg>
             </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      @if (isMobileMenuOpen) {
        <div class="md:hidden bg-white border-t border-gray-100">
           <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</a>
             <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Courses</a>
             
             <div class="px-3 py-2">
               <div class="text-base font-medium text-gray-900 mb-2">SkillStorm Global Competitions</div>
               <div class="pl-4 space-y-2 border-l-2 border-gray-200">
                 <a routerLink="/skillstorm/open-challenges" class="block text-sm text-gray-600 hover:text-blue-600" (click)="isMobileMenuOpen = false">Global Open Challenges</a>
                 <a routerLink="/skillstorm/mastery-battles" class="block text-sm text-gray-600 hover:text-blue-600" (click)="isMobileMenuOpen = false">Global Mastery Battles</a>
                 <a routerLink="/skillstorm/school-competitions" class="block text-sm text-gray-600 hover:text-blue-600" (click)="isMobileMenuOpen = false">Global School Competitions</a>
               </div>
             </div>
             
             <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</a>
           </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isDropdownOpen = false;
  isMobileMenuOpen = false;
  isHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > 80) {
      // Scrolling down and past navbar height
      this.isHidden = true;
    } else {
      // Scrolling up
      this.isHidden = false;
    }
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
