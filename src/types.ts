export interface PropertyPlot {
  id: string;
  title: string;
  slug: string;
  propertyType: 'SCO (Shop-Cum-Office)' | 'Residential Plot' | 'Mixed-Use Land';
  tagline: string;
  zone: 'TP-4 / B2 (Bhangadh)' | 'TP-1 (Kadipur)' | 'TP-4 B2 (Bhangadh Village)' | 'TP-1 Corridor' | 'TP-2 Expressway';
  location: string;
  sizes: string[];
  startingPrice: string;
  pricePerSqYd: string;
  status: 'Available' | 'Sold Out' | 'Limited Resale Inventory';
  clearTitle: boolean;
  naApproved: boolean;
  image: string;
  galleryImages: string[];
  description: string;
  features: string[];
  dimensions: string;
  boundaryRoad: string;
  highlight: string;
  officialUrl: string;
  tpScheme: string;
  totalArea: string;
}

export interface InfrastructurePillar {
  title: string;
  category: string;
  badge: string;
  description: string;
  image: string;
  completionTimeline: string;
  impactScore: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Legalities' | 'Investment' | 'Location' | 'Site Visit';
}

export interface LeadFormPayload {
  fullName: string;
  email: string;
  phone: string;
  plotSizeInterest: string;
  preferredZone: string;
  purpose: 'Personal Residence' | 'Long-Term Investment' | 'Commercial Holding';
  siteVisitRequired: boolean;
  message?: string;
}

export interface BusinessNAP {
  name: string;
  tradeName: string;
  headquarters: string;
  siteOffice: string;
  primaryPhone: string;
  secondaryPhone?: string;
  whatsappNumber: string;
  email: string;
  supportEmail?: string;
  hoursWeekday: string;
  hoursSunday: string;
  reraDisclaimer: string;
  audaZone: string;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  url: string;
}
