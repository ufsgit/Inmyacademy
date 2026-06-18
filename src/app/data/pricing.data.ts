import { Pricing } from './competition.models';

export const SCHOOL_PRICING: Pricing[] = [
  {
    id: 'single-team',
    title: 'Single Team',
    price: '£50',
    description: 'Registration for one team of up to 5 students.'
  },
  {
    id: 'full-set',
    title: 'Full Set',
    price: '£150',
    description: 'Registration for up to 3 teams, covering multiple age categories.',
    isPopular: true
  },
  {
    id: 'additional-team',
    title: 'Additional Team',
    price: '+£50',
    description: 'Add an extra team of up to 5 students.'
  }
];
