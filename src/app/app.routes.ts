import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'skillstorm/open-challenges', pathMatch: 'full' },
  { path: 'skillstorm/open-challenges', loadComponent: () => import('./pages/open-challenges/open-challenges.component').then(m => m.OpenChallengesComponent) },
  { path: 'skillstorm/school-competitions', loadComponent: () => import('./pages/school-competitions/school-competitions.component').then(m => m.SchoolCompetitionsComponent) },
  { path: 'skillstorm/registration-wizard', loadComponent: () => import('./pages/registration-wizard/registration-wizard.component').then(m => m.RegistrationWizardComponent) },
  { path: 'skillstorm/mastery-battles', loadComponent: () => import('./pages/mastery-battles/mastery-battles.component').then(m => m.MasteryBattlesComponent) },
  { path: 'skillstorm/challenges/:slug', loadComponent: () => import('./pages/challenge-details/challenge-details.component').then(m => m.ChallengeDetailsComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'skillstorm/school-dashboard', loadComponent: () => import('./pages/school-dashboard/school-dashboard.component').then(m => m.SchoolDashboardComponent) },
  { path: 'skillstorm/open-challenges-dashboard', loadComponent: () => import('./pages/open-challenges-dashboard/open-challenges-dashboard.component').then(m => m.OpenChallengesDashboardComponent) }
];
