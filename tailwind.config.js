/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F97316',
        'primary-orange-bg': '#FFF7ED',
        'dark-text': '#111827',
        'muted-text': '#6B7280',
        'card-bg': '#FFFFFF',
        'card-border': '#F3F4F6',
        'badge-orange-bg': '#FEF3C7',
        'badge-orange-text': '#D97706',
        'tag-open-bg': '#DCFCE7',
        'tag-open-text': '#16A34A',
        'earn-link-color': '#F97316',
        'extras-text': '#9CA3AF',
        'button-primary': '#F97316',
        'button-outline': '#111827',
        'score-card-border': '#E5E7EB',
        'merit-badge-bg': '#FEF3C7',
        'merit-badge-text': '#D97706',
        'community-badge-bg': '#FEE2E2',
        'community-badge-text': '#DC2626',
        'code-block-bg': '#F9FAFB',
        'code-block-text': '#374151',
        'challenge-ends-bg': '#FEE2E2',
        'challenge-ends-text': '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
