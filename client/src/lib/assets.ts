/**
 * Local portfolio images — served from /images/ for reliable Render deployment.
 */
export const ASSETS = {
  profile: "/images/profile/profile.jpg",
  leadership: "/images/leadership/zanga.jpeg",
  cover: "/images/research/research.jpeg",
  clearSight: {
    one: "/images/clear-sight/opticalproject.jpeg",
    two: "/images/clear-sight/opticalproject2.jpeg",
    three: "/images/clear-sight/opticalproject3.jpeg",
  },
  childrenYouth: {
    one: "/images/youth/childrenandyouth.jpeg",
    two: "/images/youth/childrenandyouth2.jpeg",
    three: "/images/youth/childrenandyouth3.jpeg",
  },
  digitalTraining: {
    one: "/images/training/digitaltrainer.jpeg",
    two: "/images/training/digitaltrainer2.jpeg",
    three: "/images/training/digitaltrainer3.jpeg",
    four: "/images/training/digitaltrainer4.jpeg",
  },
  research: "/images/research/research.jpeg",
  projects: {
    bridalSoiree: "/images/projects/bridal-soiree.jpg",
    smartVisionAi: "/images/projects/smart-vision-ai.jpg",
  },
} as const;

export const CLEAR_SIGHT_GALLERY = [
  { src: ASSETS.clearSight.one, alt: "Clear Sight Project — optical support distribution" },
  { src: ASSETS.clearSight.two, alt: "Clear Sight Project — children receiving optical care" },
  { src: ASSETS.clearSight.three, alt: "Clear Sight Project — community outreach for albinism support" },
] as const;
