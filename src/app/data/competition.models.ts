export interface Challenge {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  ageGroup: string;
  ageGroupColor: 'orange' | 'green' | 'blue' | 'red' | 'orange-outline';
  icon: string;
  task: string;
  earn: string;
  extras: string;
  entryFee: number;
  format: string;
  challengeDetails: string[];
  scoringCriteria: string[];
  rewards: string[];
}

export interface Track {
  id: string;
  title: string;
  phase1Task: string;
  finaleTask: string;
  extras: string;
  ageCategory: 'Trailblazers' | 'Visioneers' | 'Strategists';
}

export interface Pricing {
  id: string;
  title: string;
  price: string;
  description?: string;
  isPopular?: boolean;
}

export interface Perk {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface AgeCategory {
  id: string;
  name: string;
  ageRange: string;
  subtitle: string;
}
