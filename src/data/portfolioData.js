const imageBase = `${process.env.PUBLIC_URL}/images`;

export const profile = {
  name: 'Khadija Sajid',
  role: 'Graphic Designer',
  specialty: 'Branding & Marketing',
  location: 'Rawalpindi, Pakistan',
  email: 'khadijasajid949@gmail.com',
  phone: '+92 315 4499529',
  linkedin: 'linkedin.com/in/khadija-sajid',
  linkedinUrl: 'https://linkedin.com/in/khadija-sajid',
  intro:
    'Creative and detail-oriented graphic designer crafting impactful visuals that inspire, connect, and help brands show up with confidence.',
  portrait: `${imageBase}/profile-picture.jpeg`,
  logo: `${imageBase}/profile-picture.jpeg`,
  cv: `${imageBase}/Khadija_Sajid_CV (2).pdf`,
};

export const stats = [
  { value: '95%', label: 'Illustrator' },
  { value: '90%', label: 'Canva Pro' },
  { value: '85%', label: 'Photoshop' },
  { value: '75%', label: 'Lightroom' },
];

export const skills = [
  'Brand Identity',
  'Photo Editing',
  'Layout Design',
  'Typography',
  'Color Theory',
  'Social Media Content',
  'Campaign Graphics',
  'Team Collaboration',
];

export const tools = [
  { name: 'Adobe Illustrator', level: 95 },
  { name: 'Canva / Canva Pro', level: 90 },
  { name: 'Adobe Photoshop', level: 85 },
  { name: 'Adobe Lightroom', level: 75 },
];

export const experience = [
  {
    title: 'Assistant HR',
    company: 'Webzio',
    period: 'Jul 2025 - Present',
    location: 'Islamabad',
    points: [
      'Designed a professional company brochure aligned with brand guidelines for stronger digital consistency.',
      'Created engaging social media posts for LinkedIn, Facebook, and Instagram.',
      'Developed creative layouts, banners, and campaign graphics for marketing initiatives.',
    ],
  },
  {
    title: 'Graphic Designer Intern',
    company: 'Vidsinc',
    period: 'Jun 2025 - Aug 2025',
    location: 'Rawalpindi',
    points: [
      'Assisted in branding projects including logo and brochure concepts.',
      'Collaborated with the team on visual content for client campaigns.',
      'Created marketing creatives, banners, and flyers under senior designer supervision.',
    ],
  },
];

export const education = [
  {
    degree: 'BS Digital Design and Computer Arts',
    school: 'University of Rawalpindi',
    period: 'Oct 2024 - Present',
    location: 'Rawalpindi, Pakistan',
  },
];

export const leadership = {
  title: 'President - PMAS',
  period: '2025 - 2026',
  text: 'Leading the society creative direction, events, and design initiatives for the 2025-2026 term.',
};

export const projects = [
  {
    title: 'Shell Poster Campaign',
    category: 'Poster Design',
    description:
      'A high-impact energy brand poster with bold hierarchy, strong product recall, and clean promotional composition.',
    image: `${imageBase}/SHELL_Poster_A2_300dpi_CMYK_tagline.jpg`,
    link: `${imageBase}/SHELL_Poster_A2_300dpi_CMYK_tagline.jpg`,
    tags: ['Poster', 'Campaign', 'Brand Visual'],
    featured: true,
  },
  {
    title: 'Shell Giveaway Mockup',
    category: 'Brand Mockup',
    description:
      'Promotional mockup system showing branded giveaway material with polished placement and production-ready visual flow.',
    image: `${imageBase}/SHELL_Giveaway_Mockup.png`,
    link: `${imageBase}/SHELL_Giveaway_Mockup.png`,
    tags: ['Mockup', 'Merchandise', 'Branding'],
    featured: true,
  },
  {
    title: 'Final Visual Artwork',
    category: 'Digital Composition',
    description:
      'A refined visual composition focused on mood, image treatment, and balanced editorial-style layout.',
    image: `${imageBase}/FINAL VISUAL copy.png`,
    link: `${imageBase}/FINAL VISUAL copy.png`,
    tags: ['Composition', 'Editing', 'Layout'],
  },
  {
    title: 'A1 Poster Design',
    category: 'Print Design',
    description:
      'Large-format poster artwork built for visibility, clear reading order, and print-focused presentation.',
    image: `${imageBase}/A1 SIZE POSTER  (1).png`,
    link: `${imageBase}/A1 SIZE POSTER  (1).png`,
    tags: ['Print', 'Poster', 'Typography'],
  },
  {
    title: 'Logo & Brand Guideline',
    category: 'Brand Identity',
    description:
      'Logo exploration and guideline page covering identity direction, color control, and brand usage.',
    image: `${imageBase}/thumbnails/LOGO GUIDELINE PAGE.pdf.png`,
    link: `${imageBase}/LOGO GUIDELINE PAGE.pdf`,
    tags: ['Logo', 'Guidelines', 'Identity'],
  },
  {
    title: 'Trifold Brochure',
    category: 'Brochure Design',
    description:
      'A structured brochure layout with concise messaging, brand alignment, and print-ready content hierarchy.',
    image: `${imageBase}/thumbnails/Trifold Brochure.pdf.png`,
    link: `${imageBase}/Trifold Brochure.pdf`,
    tags: ['Brochure', 'Layout', 'Print'],
  },
  {
    title: 'Business Card System',
    category: 'Stationery',
    description:
      'Professional identity collateral designed for quick recognition, clean typography, and real-world brand use.',
    image: `${imageBase}/thumbnails/BUSSINESS CARD copy.pdf.png`,
    link: `${imageBase}/BUSSINESS CARD copy.pdf`,
    tags: ['Stationery', 'Identity', 'Print'],
  },
  {
    title: 'Magazine Layout',
    category: 'Editorial Design',
    description:
      'Editorial pages with image-led rhythm, controlled spacing, and a magazine-style reading experience.',
    image: `${imageBase}/thumbnails/Magzine PDF (3).pdf.png`,
    link: `${imageBase}/Magzine PDF (3).pdf`,
    tags: ['Magazine', 'Editorial', 'Layout'],
  },
  {
    title: 'Billboard Design',
    category: 'Outdoor Advertising',
    description:
      'Large-scale advertising layout made for distance reading, strong contrast, and fast brand recognition.',
    image: `${imageBase}/thumbnails/bill board copy.pdf.png`,
    link: `${imageBase}/bill board copy.pdf`,
    tags: ['Billboard', 'Outdoor', 'Campaign'],
  },
];

export const services = [
  'Logo and brand identity concepts',
  'Brochures, flyers, posters, and banners',
  'Social media post design and content calendars',
  'Photo editing, layout polishing, and marketing creatives',
];
