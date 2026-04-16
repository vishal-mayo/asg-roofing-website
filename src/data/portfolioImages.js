// Portfolio image data - Matches ASG Roofing website exactly
// Total: 49 images distributed as per original website

const portfolioImages = {
  "mastic-asphalt": Array.from({ length: 12 }, (_, i) => ({
    src: `/images/portfolio/mastic-asphalt/asg-mastic-asphalt-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Mastic asphalt roofing project ${i + 1} - ASG Roofing London`,
    title: `Mastic Asphalt Project ${i + 1}`,
    location: "London",
    description: "Professional mastic asphalt roofing installation by ASG Roofing specialists"
  })),
  
  "natural-man-made-slates": Array.from({ length: 6 }, (_, i) => ({
    src: `/images/portfolio/natural-man-made-slates/asg-slate-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Natural and man made slate roofing project ${i + 1} - ASG Roofing London`,
    title: `Slate Roofing Project ${i + 1}`,
    location: "London",
    description: "Natural and synthetic slate roofing installation by specialist roofers"
  })),
  
  "high-performance-felt": Array.from({ length: 6 }, (_, i) => ({
    src: `/images/portfolio/high-performance-felt/asg-felt-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `High performance felt roofing project ${i + 1} - ASG Roofing London`,
    title: `Felt Roofing Project ${i + 1}`,
    location: "London",
    description: "High-performance felt roofing system with insurance backed guarantee"
  })),
  
  "tiled-roofs": Array.from({ length: 5 }, (_, i) => ({
    src: `/images/portfolio/tiled-roofs/asg-tile-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Tiled roof project ${i + 1} - ASG Roofing London`,
    title: `Tiled Roof Project ${i + 1}`,
    location: "London",
    description: "Traditional clay and concrete tile roofing installation"
  })),
  
  "lead-roofing": [
    ...Array.from({ length: 8 }, (_, i) => ({
      src: `/images/portfolio/lead-roofing/asg-lead-${String(i + 1).padStart(2, '0')}.avif`,
      alt: `Lead roofing project ${i + 1} - ASG Roofing London`,
      title: `Lead Roofing Project ${i + 1}`,
      location: "London",
      description: "Traditional lead roofing, flashings and weatherproofing"
    })),
    {
      src: `/images/portfolio/lead-roofing/asg-lead-09.jpg`,
      alt: `Lead roofing project 9 - ASG Roofing London`,
      title: `Lead Roofing Project 9`,
      location: "London",
      description: "Lead roofing installation in progress with specialist craftsmanship"
    },
    {
      src: `/images/portfolio/lead-roofing/asg-lead-10.jpg`,
      alt: `Lead roofing project 10 - ASG Roofing London`,
      title: `Lead Roofing Project 10`,
      location: "London",
      description: "Lead roofing detail showing quality workmanship"
    },
    {
      src: `/images/portfolio/lead-roofing/asg-lead-11.jpg`,
      alt: `Lead roofing project 11 - ASG Roofing London`,
      title: `Lead Roofing Project 11`,
      location: "London",
      description: "Professional lead roofing with skylight installation"
    }
  ],
  
  "upvc-fascia-guttering": Array.from({ length: 2 }, (_, i) => ({
    src: `/images/portfolio/upvc-fascia-guttering/asg-upvc-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `UPVC fascia and guttering project ${i + 1} - ASG Roofing London`,
    title: `UPVC Project ${i + 1}`,
    location: "London",
    description: "Quality UPVC fascia, soffit and guttering installation"
  })),
  
  "copper-zinc-roofs": Array.from({ length: 10 }, (_, i) => ({
    src: `/images/portfolio/copper-zinc-roofs/asg-copper-zinc-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Copper and zinc roofing project ${i + 1} - ASG Roofing London`,
    title: `Copper & Zinc Project ${i + 1}`,
    location: "London",
    description: "Premium copper and zinc roofing with lasting appearance"
  }))
};

// Flatten for gallery use
const allImages = Object.values(portfolioImages).flat();

// Service categories for filtering - Gallery only (excludes Drone Surveys)
const serviceCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mastic-asphalt', label: 'Asphalt Roofs' },
  { id: 'natural-man-made-slates', label: 'Asphalt Roofs' },
  { id: 'high-performance-felt', label: 'Felt Roofs' },
  { id: 'lead-roofing', label: 'Lead Roofs' },
  { id: 'copper-zinc-roofs', label: 'Zinc Roofs' },
  { id: 'upvc-fascia-guttering', label: 'UPVC Fascias' },
  { id: 'guttering-repairs', label: 'Guttering & Roof Repairs' }
];

export { portfolioImages, allImages, serviceCategories };
export default portfolioImages;
