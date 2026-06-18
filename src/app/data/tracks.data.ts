import { Track } from './competition.models';

const ALL_TRACK_TITLES = [
  'Diplomatic Policy Leadership',
  'Legal Advocacy Professional',
  'Advanced Research Publication',
  'Digital Media Strategy',
  'Entrepreneurial Visionary Accelerator',
  'Executive Project Management',
  'Global Communication Mastery',
  'Digital Systems Architecture',
  'Investment Banking Elite'
];

export const MASTERY_TRACKS: Track[] = ALL_TRACK_TITLES.flatMap(title => {
  return (['Trailblazers', 'Visioneers', 'Strategists'] as const).map(ageCategory => ({
    id: `${title.toLowerCase().replace(/ /g, '-')}-${ageCategory.toLowerCase()}`,
    title,
    ageCategory,
    phase1Task: 'Online shortlisting task demonstrating foundational skills.',
    finaleTask: 'Live scenario simulation in the Grand Finale.',
    extras: 'Access to mentorship and industry networking.'
  }));
});
