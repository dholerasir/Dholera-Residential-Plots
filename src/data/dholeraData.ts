import { BusinessNAP, FaqItem, InfrastructurePillar, PropertyPlot, BlogPostItem } from '../types';

export const BUSINESS_NAP: BusinessNAP = {
  name: "Dholera Residential Plot | Omana Projects",
  tradeName: "Dholera Smart City Real Estate Advisory",
  headquarters: "7th Floor, Plot No 56A/16, C Block, Phase-2, Sector-62, Noida, Uttar Pradesh - 201309",
  siteOffice: "Plot Information Centre, TP4 / TP1 Planning Sector, Bhangadh Village, Dholera SIR, Gujarat 382455",
  primaryPhone: "+91 9217104219",
  whatsappNumber: "919217104219",
  email: "customercare@omanaprojects.com",
  supportEmail: "invest@dholeraresidentialplot.com",
  hoursWeekday: "Monday – Friday: 10:00 AM – 6:30 PM (IST)",
  hoursSunday: "Sunday: Closed (Only Site Visits On Prior Booking)",
  reraDisclaimer: "All plotting developments and layouts adhere to Dholera SIR Urban Development Authority guidelines. Clear titles, N.A. (Non-Agricultural) order, and legal search reports available.",
  audaZone: "Dholera Special Investment Region (SIR) TP1 - TP6 Town Planning Sanctioned Zones"
};

export const FEATURED_PLOTS: PropertyPlot[] = [
  {
    id: "ridhi-966-1",
    title: "Ridhi 966/1 SCO Plots",
    slug: "ridhi-966-1",
    propertyType: "SCO (Shop-Cum-Office)",
    tagline: "Premium Mixed-Use SCO Plots on 70M Road in Bhangadh, TP-4 (B2)",
    zone: "TP-4 / B2 (Bhangadh)",
    location: "Bhangadh Village, TP 4, 4B-2 Zone, Dholera SIR, Gujarat",
    sizes: ["423 Sq. Yd", "480 Sq. Yd", "540 Sq. Yd", "590 Sq. Yd"],
    startingPrice: "₹65 Lakhs Onward",
    pricePerSqYd: "₹15,300 / Sq. Yd Onward",
    status: "Available",
    clearTitle: true,
    naApproved: true,
    image: "/plots/residential-plot-1.jpg",
    galleryImages: [
      "/plots/residential-plot-1.jpg",
      "/plots/residential-plot-2.jpg",
      "/plots/residential-plot-3.jpg"
    ],
    description: "Prime commercial and residential mixed-use Shop-Cum-Office (SCO) plots in Dholera Smart City's high-demand TP-4 (B2 Zone). Designed with commanding frontage on a 70-meter wide TP road, allowing retail shops on the ground floor, corporate offices above, or luxury residential suites on upper floors.",
    features: [
      "Commanding Frontage on 70-Metre Wide Main TP Road",
      "Mixed-Use Zoning: Ground Floor Retail + Upper Floor Offices / Living",
      "Freehold Title & 100% NA Converted Commercial/Residential Status",
      "Direct Proximity to Tata ₹91,000 Cr Semiconductor Plant & Metro",
      "Total Project Parcel: 17,492 Sq. Yards with Demarcated Boundaries",
      "Complete Underground ICT Fiber, Electricity & SCADA Water Ducts"
    ],
    dimensions: "Flexible Commercial Dimensions from 423 to 590 Sq. Yd",
    boundaryRoad: "70 Metre Main Arterial TP Road",
    highlight: "Currently Open for Allotment — Starting from ₹65 Lakhs",
    officialUrl: "https://dholeraresidentialplot.com/properties/ridhi-966-1",
    tpScheme: "TP 4, 4B-2",
    totalArea: "17,492 Sq. Yd."
  },
  {
    id: "ridhi-249-2",
    title: "Ridhi 249/2 Premium SCO Plots",
    slug: "ridhi-249-2",
    propertyType: "SCO (Shop-Cum-Office)",
    tagline: "Prime Mixed-Use SCO Plots in Kadipur Village, TP-1",
    zone: "TP-1 (Kadipur)",
    location: "Survey 249/2, Kadipur Village, TP-1 Scheme, Dholera SIR, Gujarat",
    sizes: ["390 Sq. Yd", "578 Sq. Yd", "687 Sq. Yd"],
    startingPrice: "Sold Out (Enquire for Resale)",
    pricePerSqYd: "Contact for Secondary Market",
    status: "Sold Out",
    clearTitle: true,
    naApproved: true,
    image: "/plots/residential-plot-2.jpg",
    galleryImages: [
      "/plots/residential-plot-2.jpg",
      "/plots/residential-plot-3.jpg",
      "/plots/residential-plot-1.jpg"
    ],
    description: "Premium Shop-Cum-Office plots situated in Kadipur Village within sanctioned Town Planning Scheme 1 (TP-1). Benefiting from prime positioning along a 55-meter wide development plan corridor. All primary developer inventory is fully sold out; prospective buyers may register for resale and upcoming phase opportunities.",
    features: [
      "Direct Access to 55-Metre Wide Main Infrastructure Road",
      "Sanctioned TP-1 Zone in Kadipur Village",
      "Total Project Extent: 5,688 Sq. Yards across Survey 249/2",
      "Mixed-Use Permitted: Commercial Showrooms, Offices & Residential",
      "Full NA Order & Government Gazetted Clear Legal Records",
      "Resale & Waitlist Consultation Available via Omana Projects"
    ],
    dimensions: "390, 578 & 687 Sq. Yard Configurations",
    boundaryRoad: "55 Metres Wide Main Road",
    highlight: "100% Sold Out in Primary Phase — Inquire for Resale Openings",
    officialUrl: "https://dholeraresidentialplot.com/properties/ridhi-249-2",
    tpScheme: "TP-1 (Kadipur)",
    totalArea: "5,688 Sq. Yd."
  },
  {
    id: "sidhi-857",
    title: "Sidhi 857 Residential Plots",
    slug: "sidhi-857",
    propertyType: "Residential Plot",
    tagline: "NA-Converted Gated Residential Plotting in Bhangadh, TP 4-B2",
    zone: "TP-4 B2 (Bhangadh Village)",
    location: "TP Scheme 4-B2, Bhangadh Village, Dholera SIR, Gujarat",
    sizes: ["390 Sq. Yd", "420 Sq. Yd", "450 Sq. Yd"],
    startingPrice: "Sold Out (Waitlist Open)",
    pricePerSqYd: "Contact for Resale Opportunities",
    status: "Sold Out",
    clearTitle: true,
    naApproved: true,
    image: "/plots/residential-plot-3.jpg",
    galleryImages: [
      "/plots/residential-plot-3.jpg",
      "/plots/residential-plot-1.jpg",
      "/plots/residential-plot-2.jpg"
    ],
    description: "Thoughtfully planned NA-converted residential plot project located in Bhangadh Village under sanctioned TP Scheme 4-B2. Designed with an impressive 48-meter main access road and 12-meter wide internal asphalt lanes, Sidhi 857 provided pristine residential plots that sold out swiftly. Inquire for resale listings or newly released nearby parcels.",
    features: [
      "Frontage on 48-Metre Main Arterial Road + 12-Metre Internal Roads",
      "100% Clear Title & Non-Agricultural (N.A.) Residential Conversion",
      "Total Project Extent: 5,382 Sq. Yards in High-Growth TP 4-B2",
      "Immediate Proximity to Ahmedabad-Dholera Expressway & Airport",
      "High Appreciation Recorded — Early Buyers Capitalized on 2.5x Growth",
      "Resale Desk & Secondary Transfer Legal Assistance Provided"
    ],
    dimensions: "390 to 450 Sq. Yard Plot Cuts",
    boundaryRoad: "48 Metres Main Road & 12 Metres Internal Roads",
    highlight: "Prime Sold-Out Residential Enclave in TP 4-B2",
    officialUrl: "https://dholeraresidentialplot.com/properties/sidhi-857",
    tpScheme: "TP 4-B2 (Bhangadh)",
    totalArea: "5,382 Sq. Yd."
  }
];

export const INTERNAL_BLOG_POSTS: BlogPostItem[] = [
  {
    slug: "sco-plots-in-dholera-smart-city-what-they-are-who-should-buy-why-2026-is-the-right-time",
    title: "SCO Plots in Dholera Smart City: What They Are, Who Should Buy & Why 2026 Is the Right Time",
    category: "SCO Investment",
    readTime: "6 min read",
    summary: "Comprehensive breakdown of Shop-Cum-Office (SCO) plots in Dholera SIR, exploring rental yields, dual commercial-residential utility, and early TP-4 investment benefits.",
    url: "https://dholeraresidentialplot.com/blog/sco-plots-in-dholera-smart-city-what-they-are-who-should-buy-why-2026-is-the-right-time"
  },
  {
    slug: "dholera-smart-city-plot-appreciation-how-much-can-your-land-grow-in-5-years",
    title: "Dholera Smart City Plot Appreciation: How Much Can Your Land Grow in 5 Years?",
    category: "Market Forecast",
    readTime: "7 min read",
    summary: "Historical price trends, compounding capital growth projections, and impact analysis of the operational expressway and airport on land rates between 2026 and 2031.",
    url: "https://dholeraresidentialplot.com/blog/dholera-smart-city-plot-appreciation-how-much-can-your-land-grow-in-5-years"
  },
  {
    slug: "tata-semiconductor-plant-in-dholera",
    title: "Tata Semiconductor Plant in Dholera: How the ₹91,000 Crore Fab Will Change Your Plot's Value",
    category: "Megaproject Impact",
    readTime: "8 min read",
    summary: "How Tata Electronics & PSMC's commercial chip foundry in Dholera SIR is transforming regional housing demand, rental yields, and land value appreciation across nearby TP schemes.",
    url: "https://dholeraresidentialplot.com/blog/tata-semiconductor-plant-in-dholera"
  },
  {
    slug: "dholera-international-airport-2026-phase-1-complete-what-investors-need-to-know-right-now",
    title: "Dholera International Airport 2026: Phase 1 Complete — What Investors Need to Know Right Now",
    category: "Infrastructure Update",
    readTime: "5 min read",
    summary: "Runway milestones, passenger terminal delivery, international cargo capacity, and which specific plotting corridors gain the greatest appreciation from airport connectivity.",
    url: "https://dholeraresidentialplot.com/blog/dholera-international-airport-2026-phase-1-complete-what-investors-need-to-know-right-now"
  },
  {
    slug: "tp-zones-explained",
    title: "TP Zones Explained: Which Dholera Residential Zone Fits Your Budget (2026)",
    category: "Zoning Guide",
    readTime: "9 min read",
    summary: "In-depth guide comparing Town Planning Schemes TP1 through TP6, detailing town planning sanction status, permitted FSI, infrastructure progress, and budget recommendations.",
    url: "https://dholeraresidentialplot.com/blog/tp-zones-explained"
  },
  {
    slug: "dholera-sir-master-plan-explained-industrial-residential-logistics-zones",
    title: "Dholera SIR Master Plan Explained: Industrial, Residential & Logistics Zones",
    category: "Master Plan",
    readTime: "7 min read",
    summary: "Detailed overview of the 920 sq. km master development plan, highlighting the demarcation of high-access logistics corridors, solar parks, and residential sectors.",
    url: "https://dholeraresidentialplot.com/blog/dholera-sir-master-plan-explained-industrial-residential-logistics-zones"
  },
  {
    slug: "dholera-plot-registration-process-2026-stamp-duty-guide",
    title: "Dholera Plot Registration Process 2026: Complete Stamp Duty Guide",
    category: "Legal & Registry",
    readTime: "6 min read",
    summary: "Step-by-step walkthrough of Gujarat revenue sub-registrar sale deed execution, jantri rates, stamp duty calculations, and 7/12 & 8A revenue record mutations.",
    url: "https://dholeraresidentialplot.com/blog/dholera-plot-registration-process-2026-stamp-duty-guide"
  },
  {
    slug: "nri-guide-buying-residential-sco-plots-in-dholera-2026",
    title: "NRI Guide: Buying Residential & SCO Plots in Dholera 2026",
    category: "NRI Investment",
    readTime: "8 min read",
    summary: "FEMA regulations, RBI-approved NRE/NRO banking channels, remote Power of Attorney procedures, and tax advantages for Non-Resident Indians investing in Dholera SIR plots.",
    url: "https://dholeraresidentialplot.com/blog/nri-guide-buying-residential-sco-plots-in-dholera-2026"
  },
  {
    slug: "india-notifies-dholera-sez-and-it-changes-everything-for-residential-plots-in-dholera-sir",
    title: "India Notifies Dholera SEZ — And It Changes Everything for Residential Plots in Dholera SIR",
    category: "Policy & SEZ",
    readTime: "5 min read",
    summary: "Analysis of the central government's Special Economic Zone notification and its immediate domino impact on industrial expansion and residential plotting demand.",
    url: "https://dholeraresidentialplot.com/blog/india-notifies-dholera-sez-and-it-changes-everything-for-residential-plots-in-dholera-sir"
  },
  {
    slug: "plots-vs-apartment-in-dholera-sir",
    title: "Plots vs Apartment in Dholera SIR: Which Investment Makes More Sense in 2026?",
    category: "Investment Strategy",
    readTime: "6 min read",
    summary: "Critical comparison between purchasing open freehold land parcels vs high-rise apartment units in Dholera, evaluating depreciation, maintenance costs, and liquidity.",
    url: "https://dholeraresidentialplot.com/blog/plots-vs-apartment-in-dholera-sir"
  }
];

export const INFRASTRUCTURE_PILLARS: InfrastructurePillar[] = [
  {
    title: "Ahmedabad – Dholera Expressway",
    category: "Connectivity",
    badge: "Operational Phase",
    description: "A state-of-the-art 109 km 4-lane access-controlled expressway slashing travel time between Ahmedabad and Dholera Smart City to under 45 minutes.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "2025-2026 Rollout",
    impactScore: "Direct 35% Annual Plot Appreciation"
  },
  {
    title: "Dholera International Greenfield Airport",
    category: "Aviation Hub",
    badge: "Under Fast-Track Construction",
    description: "Spread over 1,426 hectares near Navagam, this massive greenfield aviation hub is designed with dual 4,000m runways handling passenger and cargo jumbo aircraft.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "First Flights Slated 2026",
    impactScore: "Global Business Destination"
  },
  {
    title: "Tata ₹91,000 Cr Semiconductor Mega Fab",
    category: "Industrial Powerhouse",
    badge: "Foundation Laid & Work Underway",
    description: "India's landmark commercial semiconductor manufacturing plant by Tata Electronics in technical partnership with PSMC Taiwan, generating 20,000+ elite tech jobs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "Production Target 2026-2027",
    impactScore: "Tremendous Housing Demand Spike"
  },
  {
    title: "Monorail & High Speed Rail Network",
    category: "Transit",
    badge: "Approved & Planned",
    description: "Dedicated high-speed rapid rail transit seamlessly integrating Ahmedabad metro with the Dholera SIR central spine, enabling effortless daily passenger commutes.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "Phase 1 by 2027",
    impactScore: "Mass Transit Convenience"
  },
  {
    title: "24/7 Smart Utilities & SCADA Automation",
    category: "Smart City",
    badge: "100% Operational in Activation Area",
    description: "Underground utility tunnels carrying potable water, treated recycled water, gas pipelines, and ICT cabling with automated sensor management from the ABCD center.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "Expanding across TP1 & TP2",
    impactScore: "Zero Digging & Clean Horizons"
  },
  {
    title: "Asia's Largest 5,000 MW Solar Park",
    category: "Clean Energy",
    badge: "Phase 1 Commissioned",
    description: "Massive ultra-mega renewable solar generation facility powering Dholera Smart City with 100% green and cost-competitive power for industries and residences.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    completionTimeline: "Fully Synchronized",
    impactScore: "Carbon-Neutral Living Ecosystem"
  }
];

export const KEY_METRICS = [
  { value: "920 Sq. Km", label: "Total Dholera SIR Area", desc: "Twice the size of Mumbai" },
  { value: "₹91,000 Cr", label: "Tata Semiconductor Fab", desc: "India's Tech Epicenter" },
  { value: "45 Mins", label: "Expressway Commute", desc: "From Ahmedabad City Ring Road" },
  { value: "100% Title", label: "Clear Registry & NA", desc: "Legally Verified Land Assets" },
  { value: "4,200+", label: "Delighted Plot Buyers", desc: "From across India & NRIs" }
];

export const FAQS: FaqItem[] = [
  {
    category: "Investment",
    question: "Why is investing in Plots In Dholera considered one of India's best real estate decisions?",
    answer: "Plots In Dholera represent a once-in-a-generation investment window. As India's pioneering Greenfield Smart City under the Delhi-Mumbai Industrial Corridor (DMIC), Dholera SIR spans 920 sq. km with complete pre-planned underground infrastructure. Anchored by the upcoming Dholera International Airport, the newly finished Ahmedabad-Dholera Expressway, and Tata's ₹91,000 crore semiconductor fab, land prices in Dholera offer exponential appreciation upside compared to saturated metropolitan centers."
  },
  {
    category: "Legalities",
    question: "Are the residential plots in Dholera Smart City legally approved with clear titles?",
    answer: "Yes, every single residential plot offered through our advisory possesses 100% clear legal titles, government non-agricultural (N.A.) residential approval, and falls strictly within sanctioned Town Planning Schemes (TP1 & TP2) recognized by the Dholera SIR Urban Development Authority. Buyers receive verified title search reports from certified High Court advocates, and sale deed registries take place directly at the government sub-registrar office."
  },
  {
    category: "Location",
    question: "What is the difference between TP1, TP2, and the Activation Zone in Dholera SIR?",
    answer: "Town Planning 1 (TP1) and Town Planning 2 (TP2) are the primary residential and mixed-use expansion zones situated directly along the expressway corridor and commercial hubs, making them ideal for high-yield plotting investments. The Activation Zone spans 22.5 sq. km where core administrative infrastructure, the ABCD smart building, and industrial operations are already functioning on the ground."
  },
  {
    category: "Site Visit",
    question: "How can I schedule an in-person or virtual VIP site visit to view a Plot in Dholera?",
    answer: "We offer complimentary round-trip VIP vehicle site visits originating from Ahmedabad Airport, Railway Station, or major SG Highway pick-up points. During the visit, a senior Dholera SIR land consultant will escort you across TP1, TP2, the Expressway exits, and the project plots. For NRI and interstate investors, we also conduct real-time 360-degree drone video walkthroughs with geo-tagged coordinate verification."
  },
  {
    category: "Investment",
    question: "What is the minimum entry investment required for a plot in Dholera Smart City?",
    answer: "Plots In Dholera start at very accessible ticket sizes beginning from approximately ₹14.9 Lakhs for standard 100 Sq. Yd residential configurations, with flexible interest-free installment schedules and customized banking loan assistance through leading public and private nationalized banks."
  },
  {
    category: "Legalities",
    question: "Can Non-Resident Indians (NRIs) legally buy a residential plot in Dholera SIR?",
    answer: "Absolutely. Under Reserve Bank of India (RBI) and FEMA guidelines, NRIs and PIOs holding valid Indian passports or OCI cards can legally acquire residential plots in Dholera through normal banking channels (NRE/NRO accounts). We handle comprehensive remote documentation, notarization, and Power of Attorney registry processes seamlessly."
  }
];
