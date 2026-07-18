/**
 * stats.js — Static seed data for the Hero Statistics panel.
 *
 * CMS NOTE:
 * This is the only file that changes when the backend is live.
 * Replace the export with:
 *
 *   export const stats = await fetch('/api/stats').then(r => r.json());
 *
 * Every consumer (HeroStats, etc.) continues working without modification.
 */

export const stats = [
  {
    id: 1,
    value: "250+",
    label: "Projects Completed",
  },
  {
    id: 2,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    id: 3,
    value: "15+",
    label: "Years Experience",
  },
  {
    id: 4,
    value: "24/7",
    label: "Support",
  },
];
