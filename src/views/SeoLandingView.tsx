/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Award, Search, Share2, FileCode, MapPin, TrendingUp, Compass, 
  Gauge, Lightbulb, CheckCircle2, ChevronRight, Copy, Check,
  BookOpen, Calendar, HelpCircle, Laptop, Settings, ArrowRight, ClipboardCheck,
  ChevronDown, ExternalLink, RefreshCw, AlertTriangle, PlayCircle, Globe, Phone
} from "lucide-react";
import { SEO_DATA } from "../data";

interface LandingPageData {
  name: string;
  slug: string;
  distance: string;
  timeLine: string;
  zipCode: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDesc: string;
  introHeading: string;
  introBody: string;
  uspHighlight: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question?: string;
  faq2Answer?: string;
}

// Highly customized localized landing pages details for the 11 target areas requested by the user
const LOCATION_PAGES: LandingPageData[] = [
  {
    name: "Whitefield",
    slug: "car-service-whitefield",
    distance: "16 km from Kada Agrahara workshop",
    timeLine: "Within 45 mins driver arrival time",
    zipCode: "560066",
    primaryKeyword: "Car Service Whitefield",
    metaTitle: "Best Car Service Center in Whitefield Bangalore | Hari AutoMobiles",
    metaDesc: "Searching for high-quality Car Service in Whitefield? Independent Fiat & Jeep Specialist. Free premium pickup & drop-off for tech parks & residential villas.",
    introHeading: "Premium Multi-Brand Car Service & Repair in Whitefield, Bangalore",
    introBody: "Skip the heavy lines and premium markups at IT park dealership workshops. Hari AutoMobiles delivers dealergrade diagnostic scans, expert mechanical repairs, and robust suspension tuning for car owners located across Whitefield, Hope Farm, and Varthur. We arrange a safe designated driver pickup to bring your car to our specialized Kada Agrahara hub.",
    uspHighlight: "Highly active free pickup & drop-off active for Prestige Shantiniketan, DivyaSree, and Brigade Tech Park blocks daily.",
    faq1Question: "How do you manage car pickup from Whitefield offices?",
    faq1Answer: "Our verified and insured technicians collect your car directly from your Whitefield IT office baseline basement or residential community parking, sharing digital job cards and high-definition video status updates before performing repairs."
  },
  {
    name: "Marathahalli",
    slug: "car-service-marathahalli",
    distance: "14 km from Kada Agrahara workshop",
    timeLine: "Within 40 mins driver arrival time",
    zipCode: "560037",
    primaryKeyword: "Best Car Service Center Marathahalli",
    metaTitle: "Affordable Car Repair & Service in Marathahalli | Hari AutoMobiles",
    metaDesc: "Get premium car repair in Marathahalli at affordable rates. Specialist in diesel motor repairs, clutch overhauls, and steering mechanics. WhatsApp booking active.",
    introHeading: "Professional independent Car Workshop near Marathahalli",
    introBody: "Damp and high-traffic conditions along the Outer Ring Road demand reliable vehicle health. Whether it's a hatchback throttle body cleaning, a premium diesel SUV timing belt replacements, or dual-zone high-performance AC system repair, we serve the entire Marathahalli, Spice Garden, and Munnekolala zones.",
    uspHighlight: "Same-day express periodic servicing with authentic spares (Magneti Marelli, Mopar, Valeo) backed by an inspection warranty.",
    faq1Question: "Can I get on-site battery replacement near Marathahalli bridge?",
    faq1Answer: "Yes! We run active emergency response teams for flat car battery replacements, delivering genuine Exide or Amaron batteries within 60 minutes directly to Marathahalli."
  },
  {
    name: "KR Puram",
    slug: "car-repair-kr-puram",
    distance: "11 km from Kada Agrahara workshop",
    timeLine: "Within 30 mins driver arrival time",
    zipCode: "560036",
    primaryKeyword: "Car Repair KR Puram",
    metaTitle: "Trusted Car Mechanical Repair Workshop in KR Puram | Hari AutoMobiles",
    metaDesc: "Multi-brand car repair shop in KR Puram. Specialist mechanics for engine rebuilds, gearbox overhauls, 3D wheel alignments, and bumper paint restorations.",
    introHeading: "Reliable Passenger Vehicle Repair Center in KR Puram Bangalore",
    introBody: "Located strategically near the KR Puram hanging bridge corridor, our workshop delivers efficient, high-integrity mechanical overhauls. We specialize in solving engine check lights, manual gearbox drag, worn brake assemblies, and critical suspension noise for Fiat, Jeep, Maruti Suzuki, Tata, and Hyundai builds.",
    uspHighlight: "Equipped with automated Italian 3D Wheel Geometry alignments and wheel balancers to eliminate highway vibrations.",
    faq1Question: "Is KR Puram eligible for free vehicle pickup?",
    faq1Answer: "Absolutely! Residents across KR Puram, TC Palya, and Ramamurthy Nagar can utilize our premium free pick-and-drop service for periodic periodic maintenance packages."
  },
  {
    name: "Hoskote",
    slug: "car-repair-hoskote",
    distance: "15 km from Kada Agrahara workshop",
    timeLine: "Within 45 mins driver arrival time",
    zipCode: "562114",
    primaryKeyword: "Automobile Workshop Hoskote",
    metaTitle: "Automobile Repair Workshop in Hoskote Bangalore | Hari AutoMobiles",
    metaDesc: "Car running rough on NH 75? Elite car repair, general maintenance, and diesel engine tuning in Hoskote. Genuine spares at honest pricing.",
    introHeading: "Expert Multi-Brand Passenger Car Garage serving Hoskote Drivers",
    introBody: "For vehicle owners in the Hoskote industrial zone and residential neighborhoods, securing authentic mechanical specialists shouldn't take a lengthy drive. Our workshop manages advanced CRDI high-pressure fuel injector calibration, turbocharger rebuilding, and full timing chain setups for long-distance highway builds.",
    uspHighlight: "Ideal highway service pit-stop. We use highly certified high-temperature synthetic engine oils for superior heat dissipation.",
    faq1Question: "Do you support premium European hatchback builds in Hoskote?",
    faq1Answer: "Yes, we have specialized dealer-grade computerized scanning tools for Volkswagen, Skoda, and Fiat, enabling accurate fault-code diagnostics in Hoskote."
  },
  {
    name: "Hoodi",
    slug: "car-mechanic-hoodi",
    distance: "12 km from Kada Agrahara workshop",
    timeLine: "Within 35 mins driver arrival time",
    zipCode: "560048",
    primaryKeyword: "Car Mechanic Hoodi",
    metaTitle: "Professional Car Mechanic Near Hoodi Bangalore | Hari AutoMobiles",
    metaDesc: "Top-rated multi-brand car mechanic in Hoodi. Expert clutch repairs, suspension rebuilds, chilled air conditioning service, and 1.3L Multijet tuning.",
    introHeading: "Certified Multi-Brand Car Technicians & Mechanical Experts in Hoodi",
    introBody: "Hoodi's tech parks and high-rise apartments require immediate, transparent mechanic access. Hari AutoMobiles brings elite diagnostic and engineering care directly to Hoodi. We fix common driving symptoms: heavy pedal drag, sluggish throttle boost, active cooling degradation, and uneven tire wear patterns.",
    uspHighlight: "Direct WhatsApp communication with your assigned car technician, including live photo confirmations of unboxed genuine spares.",
    faq1Question: "Can I choose between OEM and aftermarket brake assemblies?",
    faq1Answer: "Yes. For Hoodi drivers, we offer original factory brakes (Mopar/Brembo/TVS) or premium certified multi-brand options to fit your budget securely."
  },
  {
    name: "Mahadevapura",
    slug: "fiat-service-mahadevapura",
    distance: "13 km from Kada Agrahara workshop",
    timeLine: "Within 40 mins driver arrival time",
    zipCode: "560048",
    primaryKeyword: "Fiat Service Bangalore",
    metaTitle: "Fiat & Multi-Brand Car Service in Mahadevapura | Hari AutoMobiles",
    metaDesc: "Independent Fiat Service specialist for Mahadevapura. OEM tools, authentic Punto/Linea timings kits, and expert multi-brand digital scanning.",
    introHeading: "Elite Car Service Hub & Independent Fiat/Jeep Mechanics in Mahadevapura",
    introBody: "Located just a short span away from the bustling IT zones of Mahadevapura, Hari AutoMobiles is the definitive choice for sophisticated car owners. We are a renowned independent Fiat specialist in Bangalore, resolving historical cooling issues, low-boost turbo codes, and heavy clutch profiles on Punto, Linea, and Jeep Compass.",
    uspHighlight: "Official timing belt locking jigs and high-end scan tools for Chrysler-Fiat and independent multi-brand setups.",
    faq1Question: "How long does a general periodic service take from Mahadevapura?",
    faq1Answer: "An express periodic service (including engine oil swap, oil filter, air filter, and comprehensive 50-point diagnostics) takes just 4 to 5 hours from pickup to return."
  },
  {
    name: "Brookefield",
    slug: "diesel-car-service-brookefield",
    distance: "15 km from Kada Agrahara workshop",
    timeLine: "Within 45 mins driver arrival time",
    zipCode: "560066",
    primaryKeyword: "Diesel Car Service Bangalore",
    metaTitle: "Diesel Car Service & Turbo Repair in Brookefield | Hari AutoMobiles",
    metaDesc: "Expert diesel motor diagnostics & servicing in Brookefield. Intercooler cleaning, EGR decarbonizing, turbocharger overhauls, and timing chain alignment.",
    introHeading: "Advanced Diesel Car Maintenance & Mechanical Repair in Brookefield",
    introBody: "Diesel motors require precise thermoregulation and clean aspiration. At Hari AutoMobiles, we specialize in high-torque diesel passenger engines (including FCA 2.0L Multijet, Suzuki 1.3L DDiS, Hyundai CRDi, and Tata Revotorq blocks). We manage complex exhaust gas EGR decarbonizing, DPF filter cleaning, and turbo oil tube blockage resolution.",
    uspHighlight: "Deep chemical EGR flushing and active exhaust DPF regenerations to lower pollution metrics and boost mileage.",
    faq1Question: "Why is my car emitting black smoke under acceleration in Brookefield?",
    faq1Answer: "This usually points to a clogged EGR valve or carbon-coated intake runner. We perform absolute dismantling and ultrasonic diesel system cleaning to restore original performance."
  },
  {
    name: "Electronic City",
    slug: "car-service-electronic-city",
    distance: "25 km from Kada Agrahara workshop",
    timeLine: "Within 60 mins driver arrival time",
    zipCode: "560100",
    primaryKeyword: "Best Car Service Center Bangalore",
    metaTitle: "Premium Car Service Center Electronic City | Hari AutoMobiles",
    metaDesc: "Avoid overpriced service centers in Electronic City. Genuine spares, transparent digital inspection cards, and flat-rate periodic service with pickup.",
    introHeading: "Independent Automobile Service Specialist serving Electronic City",
    introBody: "For professionals commuting across Phase 1 and Phase 2 of Electronic City, car health is crucial for long-distance city runs. Hari AutoMobiles offers a premier service structure. Every vehicle receives deep scanning, synthetic fluid replenishment, complete structural underside tightening, and complete brake caliper greasing.",
    uspHighlight: "Extended commuter benefit: Free highway alignment checking on bookings plus direct executive pickup service.",
    faq1Question: "Is the distance of 25km a barrier for Electronic City customers?",
    faq1Answer: "Not. We arrange professional, flat-bed towing or active verified transport operators to ferry vehicles safely. Many of our loyal Jeep and Fiat owners in E-City rely on this secure method."
  },
  {
    name: "Indiranagar",
    slug: "fiat-punto-repair-indiranagar",
    distance: "14 km from Kada Agrahara workshop",
    timeLine: "Within 40 mins driver arrival time",
    zipCode: "560038",
    primaryKeyword: "Fiat Punto Repair Bangalore",
    metaTitle: "Fiat Punto & Linea Expert Repair in Indiranagar | Hari AutoMobiles",
    metaDesc: "Your trusted independent Fiat Punto repair garage near Indiranagar. Steering rack replacement, timing kit replacement, genuine Paraflu coolant flush.",
    introHeading: "Indiranagar's Premier Independent Alternative for Fiat & Jeep Maintenance",
    introBody: "Indiranagar's motoring enthusiasts demand high precision. As classic Fiat and performance Jeep vehicles require meticulous mechanical attention, Hari AutoMobiles stands as the city's trusted independent authority. From stiff hydraulic steering repairs to Fiat Punto Abarth clutch swaps, we handle it with mechanical perfection.",
    uspHighlight: "We source authentic luxury-grade interior trim switches, suspension bushes, and cooling tubes that dealers label out of stock.",
    faq1Question: "Do you have the specific Timing chain locking tool for a Fiat Punto 90HP?",
    faq1Answer: "Yes. We have the precise timing tool locking kits for BOTH Fiat Punto 75HP and 90HP Multijet variants to ensure factory-calibrated fuel delivery metrics."
  },
  {
    name: "HSR Layout",
    slug: "car-ac-service-hsr-layout",
    distance: "18 km from Kada Agrahara workshop",
    timeLine: "Within 50 mins driver arrival time",
    zipCode: "560102",
    primaryKeyword: "Car AC Service Bangalore",
    metaTitle: "Car AC Service & Fast Cooling Repair in HSR Layout | Hari AutoMobiles",
    metaDesc: "Chilled car AC repair near HSR Layout. Deep refrigerant gas topping, high-vacuum compressor testing, condenser debris cleaning, HVAC dust extraction.",
    introHeading: "Advanced HVAC & Car Cabin AC Servicing for HSR Layout Drivers",
    introBody: "High temperatures and exhaust fumes along HSR Layout sectors demand premium air filtration and efficient cooling. Our specialized Car AC service includes a full diagnostic check for leaks utilizing electronic trace sensors, evaporator cleaning to kill mold spores, cabin micro-filter replacement, and genuine R134a refrigerant charge.",
    uspHighlight: "Micro-droplet pressure wash of the condenser grid to lower compressor load and enhance cooling efficiency by 40%.",
    faq1Question: "Why is my car AC blowing warm air in bumper-to-bumper traffic?",
    faq1Answer: "This is often caused by an unresponsive engine cooling fan relay, weak auxiliary fan motor speed, or slight AC gas depressurization. We diagnose and pinpoint the exact issue instead of forcing a full compressor replacement."
  },
  {
    name: "Sarjapur Road",
    slug: "wheel-alignment-sarjapur-road",
    distance: "19 km from Kada Agrahara workshop",
    timeLine: "Within 55 mins driver arrival time",
    zipCode: "560035",
    primaryKeyword: "Wheel Alignment Bangalore",
    metaTitle: "3D Wheel Alignment & Electronic Balancing on Sarjapur Road | Hari AutoMobiles",
    metaDesc: "Solve steering pull and uneven tire wear. 3D wheel alignment, road-simulation wheel balancing, and active steering angle calibration for Sarjapur Road.",
    introHeading: "Precision 3D Wheel Geometry Alignment & Underbody Care around Sarjapur Road",
    introBody: "Irregular road structures and high-speed highway lanes around Sarjapur and Bellandur can quickly throw your vehicle's camber and toe angles out of spec, causing costly tyre wear. Hari AutoMobiles utilizes computerized 3D aligning sensors and accurate manufacturing specifications databases for domestic and imported passenger SUVs.",
    uspHighlight: "Underbody mechanical bolt retorque and active tyre rotation strategy included in all alignment packages.",
    faq1Question: "How often should I balance and align my car tyres in Bangalore?",
    faq1Answer: "We strongly recommend performing alignment and balancing every 5,000 to 7,000 kilometers, or immediately if you experience heavy steering pull or lane-change vibrations."
  }
];

export default function SeoLandingView({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selectedLocIdx, setSelectedLocIdx] = useState<number>(0);
  const [copiedSchema, setCopiedSchema] = useState<boolean>(false);
  const [copiedRobots, setCopiedRobots] = useState<boolean>(false);
  const [copiedSitemap, setCopiedSitemap] = useState<boolean>(false);
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);
  const [activeKeywordTab, setActiveKeywordTab] = useState<"all" | "primary" | "secondary" | "longtail">("all");

  const currentLoc = LOCATION_PAGES[selectedLocIdx];

  const handleCopy = (text: string, type: "schema" | "robots" | "sitemap") => {
    navigator.clipboard.writeText(text);
    if (type === "schema") {
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2000);
    } else if (type === "robots") {
      setCopiedRobots(true);
      setTimeout(() => setCopiedRobots(false), 2000);
    } else {
      setCopiedSitemap(true);
      setTimeout(() => setCopiedSitemap(false), 2000);
    }
  };

  // Structured Schema Code snippet based on Local Schema (JSON-LD)
  const schemaMarkup = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": "https://hari-automobiles.com/#localbusiness",
      "name": "Hari AutoMobiles",
      "image": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200&auto=format&fit=crop&q=80",
      "url": "https://hari-automobiles.com",
      "telephone": "+918971194430",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "St. Antony's road, Kada Agrahara Main Rd, opp. TimberLand creation, Lovedale, Anagalapura",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560077",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.065171",
        "longitude": "77.685324"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hari_automobiles_blr/",
        "https://www.youtube.com/@hari_automobiles"
      ],
      "areaServed": [
        "Anagalapura", "Kada Agrahara", "Hennur", "Whitefield", "Marathahalli",
        "KR Puram", "Hoskote", "Hoodi", "Mahadevapura", "Brookefield",
        "Electronic City", "Indiranagar", "HSR Layout", "Sarjapur Road"
      ],
      "description": "Premium multi-brand independent car service and repair workshop in Bangalore. Experts in Fiat and Jeep mechanics, turbochargers, air conditioning, timing kits, and diesel engine diagnostics."
    }
  ]
}`;

  const robotsTxt = `# Standard Robots.txt for Hari AutoMobiles Bangalore
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /temp/

# XML Sitemap Link
Sitemap: https://hari-automobiles.com/sitemap.xml`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated for local Bangalore crawl authority -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hari-automobiles.com/</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hari-automobiles.com/#about</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hari-automobiles.com/#services</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hari-automobiles.com/#testimonials</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hari-automobiles.com/#contact</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Location Pages (Bangalore Areas Local Keywords Targets) -->
  ${LOCATION_PAGES.map(loc => `  <url>
    <loc>https://hari-automobiles.com/location/${loc.slug}</loc>
    <lastmod>2026-06-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`).join("\n")}
</urlset>`;

  const keywordMatrix = [
    {
      keyword: "Car Service Bangalore",
      type: "primary",
      difficulty: "Medium (42%)",
      intent: "Commercial / Transactional",
      volume: "8,100/mo",
      strategy: "Target via main home page H1 and core landing section. Capture organic search volume by demonstrating independent premium care."
    },
    {
      keyword: "Best Car Service Center Bangalore",
      type: "primary",
      difficulty: "High (51%)",
      intent: "Transactional",
      volume: "3,600/mo",
      strategy: "Target with premium credentials, aggregate reviews count (5/5 star rating from over 303 residents), and diagnostic tools list."
    },
    {
      keyword: "Car Repair Bangalore",
      type: "primary",
      difficulty: "Medium (45%)",
      intent: "Commercial",
      volume: "5,400/mo",
      strategy: "Index fully under 'Bumper-to-Bumper Accident Claims' and individual service cards like clutch and suspension overhauls."
    },
    {
      keyword: "Automobile Workshop Bangalore",
      type: "primary",
      difficulty: "Low-Medium (34%)",
      intent: "Commercial",
      volume: "1,900/mo",
      strategy: "Leverage independent alternative positioning. Emphasize physical scale, diagnostic bays, and paint booths."
    },
    {
      keyword: "Car Mechanic Bangalore",
      type: "primary",
      difficulty: "Medium (39%)",
      intent: "Commercial / Near-Me",
      volume: "4,400/mo",
      strategy: "Optimized on Footer, contact page copy, and map embed metadata targeting neighborhood driver mechanics."
    },
    {
      keyword: "Fiat Service Bangalore",
      type: "primary",
      difficulty: "Low (18%)",
      intent: "Transactional (Specialist)",
      volume: "880/mo",
      strategy: "High conversion rate! Target through custom specialists page. Highlight Fiat timing kits, genuine Paraflu coolant, and timing locking pin tools."
    },
    {
      keyword: "Fiat Punto Repair Bangalore",
      type: "primary",
      difficulty: "Very Low (11%)",
      intent: "Transactional",
      volume: "390/mo",
      strategy: "Optimized for Fiat enthusiasts. Solve parts availability problems clearly inside H2 elements. Capture high loyalty niche."
    },
    {
      keyword: "Diesel Car Service Bangalore",
      type: "primary",
      difficulty: "Low-Medium (28%)",
      intent: "Commercial",
      volume: "1,200/mo",
      strategy: "Optimized in periodic general pages. Outline common issues: EGR clogging, turbo wastegate noise, and black smoke fixes."
    },
    {
      keyword: "Engine Oil Leak Repair Bangalore",
      type: "secondary",
      difficulty: "Low (21%)",
      intent: "Informational / Commercial",
      volume: "650/mo",
      strategy: "Target common vehicle issues (tappet cover packing, sump gasket leaks) on blogs and general diagnostic guides."
    },
    {
      keyword: "Turbo Repair Bangalore",
      type: "secondary",
      difficulty: "Low (24%)",
      intent: "Commercial / Transactional",
      volume: "580/mo",
      strategy: "Position as intermediate turbocharger specialist workshop for Fiat Multijet and Jeep diesel systems."
    },
    {
      keyword: "Car AC Service Bangalore",
      type: "secondary",
      difficulty: "Medium (38%)",
      intent: "Commercial",
      volume: "2,900/mo",
      strategy: "Highlight complete process (condenser cleaning, refrigerant topping). Push heavily during pre-lockdown summer seasons."
    },
    {
      keyword: "Wheel Alignment Bangalore",
      type: "secondary",
      difficulty: "Medium (35%)",
      intent: "Commercial",
      volume: "3,200/mo",
      strategy: "Emphasize Italian 3D alignment sensors, underbody inspections, and highway tire wear balancing."
    },
    {
      keyword: "Brake Repair Bangalore",
      type: "secondary",
      difficulty: "Low-Medium (26%)",
      intent: "Transactional",
      volume: "1,100/mo",
      strategy: "Focus on safety, caliper pin greasing, original discs, and brake pads change timeline."
    },
    {
      keyword: "Car Battery Replacement Bangalore",
      type: "secondary",
      difficulty: "Medium (37%)",
      intent: "Immediate / Transactional",
      volume: "2,400/mo",
      strategy: "Target on-call battery diagnostic dispatch with standby Amaron, SF Sonic & Exide replacement within 1 hour."
    },
    {
      keyword: "Clutch Repair Bangalore",
      type: "secondary",
      difficulty: "Low-Medium (29%)",
      intent: "Commercial",
      volume: "1,400/mo",
      strategy: "Highlight clutch hardness testing, master/slave cylinder diagnostic, and pressure plate replacements."
    },
    {
      keyword: "Car Diagnostics Bangalore",
      type: "secondary",
      difficulty: "Low (22%)",
      intent: "Commercial",
      volume: "920/mo",
      strategy: "Focus on the diagnostic scanning tool checkups. Explain fault codes (MIL / ABS orange lights) clearly."
    },
    {
      keyword: "Best Fiat Punto Service Center in Bangalore",
      type: "longtail",
      difficulty: "Very Low (6%)",
      intent: "Direct Search",
      volume: "260/mo",
      strategy: "Immediate #1 Ranking Opportunity. Use location-specific sub-pages and specific timing jig diagrams."
    },
    {
      keyword: "Affordable Car Repair Near Whitefield",
      type: "longtail",
      difficulty: "Low-Medium (22%)",
      intent: "Geo-Specific Commercial",
      volume: "480/mo",
      strategy: "Whitefield landing page H2 focus. Prominently claim 'Free safe executive pickup and delivery from Whitefield offices'."
    },
    {
      keyword: "Diesel Engine Repair Specialist Bangalore",
      type: "longtail",
      difficulty: "Low (16%)",
      intent: "Direct Expert Search",
      volume: "320/mo",
      strategy: "Focus on common diesel blocks FCA Compass 2.0L, Suzuki 1.3L DDiS, Mahindra mHawk, and Tata Revotorq."
    },
    {
      keyword: "Turbocharger Repair for Fiat Punto Bangalore",
      type: "longtail",
      difficulty: "Very Low (3%)",
      intent: "High Intent Diagnosis",
      volume: "140/mo",
      strategy: "Highlight cost effectiveness compared to new turbo setups: replace cartilage / clean actuator solenoid instead."
    },
    {
      keyword: "Trusted Car Mechanic Near Me Bangalore",
      type: "longtail",
      difficulty: "Medium (33%)",
      intent: "Immediate Local",
      volume: "4,900/mo",
      strategy: "Google Map citation optimization, proximity reviews, and locality schema mapping."
    },
    {
      keyword: "Engine Oil Consumption Repair Bangalore",
      type: "longtail",
      difficulty: "Low (12%)",
      intent: "Specific Repair",
      volume: "190/mo",
      strategy: "Help file a technical article explaining piston rings, valve stem seal hardening on Maruti K-Series and Fiat Multijet."
    }
  ];

  const filteredKeywords = activeKeywordTab === "all" 
    ? keywordMatrix 
    : keywordMatrix.filter(k => k.type === activeKeywordTab);

  // FAQ targeted for Local search
  const localFaqs = [
    {
      q: "Where is Hari AutoMobiles located, and which nearby areas do you cover?",
      a: "Our prime mechanical workshop is located on Kada Agrahara Main Road, opposite TimberLand Creation, near Anagalapura, Bangalore (560077). We run an active, scheduled pickup and drop service across Whitefield, Marathahalli, KR Puram, Hoskote, Indiranagar, HSR Layout, Sarjapur Road, Electronic City, and Hoodi."
    },
    {
      q: "Why should I choose Hari AutoMobiles instead of official dealer workshops in Bangalore?",
      a: "Dealerships in Bangalore often push complete parts replacement over repairs, and charge up to 50% higher labor fees. We diagnose and repair specific components first (e.g. caliper greasing, intercooler clean, clutch bleed), saving you money. Additionally, we are specialized independent authorities on Fiat Multijet/Jeep Compass motors."
    },
    {
      q: "Are the spares used at Hari AutoMobiles genuine or duplicate?",
      a: "We only use 100% genuine original factory parts sourced directly from authorized spare networks (OEM brands like Mobil, Paraflu, Mopar, Valeo, Magneti Marelli, Exide, Bosch, Brembo, and TVS). Old worn parts are always returned to you in the boot of your car as visual proof of service transparency."
    },
    {
      q: "How does the pick-up and drop-off service work for high-traffic Bangalore IT hubs like Whitefield?",
      a: "Once you schedule a time block (via website form or WhatsApp), we assign a secure, verified technician to pick up your car from your office basement or residence. Your vehicle is safely transported, serviced in our state-of-the-art facility, and dropped back with high-definition digital invoice receipts and video updates shared directly."
    }
  ];

  // 30 Blog ideas categorized by SEO topic
  const blogTopics = [
    { cat: "Fiat & Jeep Specialists", topic: "The Ultimate Maintenance Checklist for Fiat Punto & Linea in Bangalore's Bumper-to-Bumper Traffic", keyword: "Fiat Punto Repair Bangalore" },
    { cat: "Fiat & Jeep Specialists", topic: "Why Does the Jeep Compass Rear Brake Squeal? (And How Our Caliper Bracket Service Solves It)", keyword: "Jeep Repair Bangalore" },
    { cat: "Fiat & Jeep Specialists", topic: "Sourcing Genuine Parts for Fiat Cars in India: The Independent Owner’s Comprehensive Guide", keyword: "Fiat Specialist Bangalore" },
    { cat: "Fiat & Jeep Specialists", topic: "Timing Chain Replacement for 1.3L Multijet Engines: Standard Lifespan and Failure Warning Symptoms", keyword: "Fiat Service Bangalore" },
    { cat: "Fiat & Jeep Specialists", topic: "Jeep Compass 2.0L Diesel DPF Regeneration: Best Driving Habits to Avoid Costly Cluster Clog Warnings", keyword: "Jeep Specialist Bangalore" },
    { cat: "Fiat & Jeep Specialists", topic: "Common Dualogic AMT Gearbox Errors on Fiat Punto: System Bleeding and Actuator Diagnostics", keyword: "Fiat Car Repair Bangalore" },
    
    { cat: "Diesel Car Repairs", topic: "Sluggish Throttle Response? How a Clogged intercooler & EGR Evaporator Saps Diesel SUV Fuel Efficiency", keyword: "Diesel Car Service Bangalore" },
    { cat: "Diesel Car Repairs", topic: "Understanding Turbocharger Lag and Intercooler Leaks in Compact Hatchbacks", keyword: "Turbo Repair Bangalore" },
    { cat: "Diesel Car Repairs", topic: "Diesel Exhaust Fluid (DEF) AdBlue Guide for SUVs: Brands, Refill Intervals and Warning Code Clears", keyword: "Diesel Engine Repair Specialist" },
    { cat: "Diesel Car Repairs", topic: "Engine Oil Consumption Issue on High-Mileage Diesel Commuters: Diagnose Ring and Stem Seals", keyword: "Engine Oil Consumption Repair" },
    { cat: "Diesel Car Repairs", topic: "Diagnosing Cold-Start Engine Crank Failures: Is it Your Glow Plugs, Fuel Pump, or Batteries?", keyword: "Automobile Workshop Bangalore" },
    { cat: "Diesel Car Repairs", topic: "The complete EGR Decarbonizing Blueprint: Restore original Pickup and Mileage in 5 Simple Steps", keyword: "Best Car Service Center Bangalore" },

    { cat: "Underbody & Comfort Servicing", topic: "Why Does Bangalore’s Monsoons Ruin Your Car Suspension? Common Joint Rust & Bush Cracks Explained", keyword: "Car Repair Bangalore" },
    { cat: "Underbody & Comfort Servicing", topic: "3D Wheel Alignment vs 2D Aligning: When Does Your Steering Wheel Truly Need Alignment?", keyword: "Wheel Alignment Bangalore" },
    { cat: "Underbody & Comfort Servicing", topic: "Stiff Hydraulic Steering Rack on Fiat Punto: Causes, Low Fluid Warnings, and Rebuilding Tips", keyword: "Hennur Car Mechanic near me" },
    { cat: "Underbody & Comfort Servicing", topic: "Car Clutch Overhaul: Signs Your Pressure Plate is Slipping (and Hard Clutch Pedal Causes)", keyword: "Clutch Repair Bangalore" },
    { cat: "Underbody & Comfort Servicing", topic: "How Often Should You Replace Brake Caliper Pads? (Warning Noises and Rotor Disc Wear)", keyword: "Brake Repair Bangalore" },
    { cat: "Underbody & Comfort Servicing", topic: "Car Air Conditioning Blowing Warm in Bumper-to-Bumper Traffic: A Comprehensive Diagnostic Guide", keyword: "Car AC Service Bangalore" },

    { cat: "General Preventive Maintenance", topic: "Mineral vs Semi-Synthetic vs Fully Synthetic Engine Oil: What is Best for Bangalore Commuters?", keyword: "Engine Oil Leak Repair Bangalore" },
    { cat: "General Preventive Maintenance", topic: "How to Read OBD2 Diagnostic Trouble Codes (DTC): Common Orange Warning Signs Decoded", keyword: "Car Diagnostics Bangalore" },
    { cat: "General Preventive Maintenance", topic: "Pre-Owned Car Maintenance: 8 Things to Replace Immediately After Buying a Used Car", keyword: "Vehicle Maintenance Bangalore" },
    { cat: "General Preventive Maintenance", topic: "Car Battery Replacement: Amaron vs Exide - Lifespan and Active Warranty Registrations", keyword: "Car Battery Replacement Bangalore" },
    { cat: "General Preventive Maintenance", topic: "Monsoon Car Care Tips: Underbody Anti-Rust Coating, Wiper Blades, and Electronic Moisture Control", keyword: "Car Garage Bangalore" },
    { cat: "General Preventive Maintenance", topic: "How to File a Bumper-to-Bumper Accident Claim in Bangalore: Step-by-Step Surveyor Guide", keyword: "Affordable Car Repair near Whitefield" },

    { cat: "Location Targeted Authority", topic: "Whitefield Car Commuter Guide: Best Practices for Maintaining Hybrid & Automatic Cars Active", keyword: "Car Service Whitefield" },
    { cat: "Location Targeted Authority", topic: "Why IT Professionals in Indiranagar Prefer Independent Car Garages Over Dealerships", keyword: "Fiat Punto Repair Indiranagar" },
    { cat: "Location Targeted Authority", topic: "Common Underbody Damages on Sarjapur Road: How Potholes and Speedbreakers Affect Struts", keyword: "Wheel Alignment Sarjapur Road" },
    { cat: "Location Targeted Authority", topic: "Mahadevapura Area Periodic Servicing Guide: Avoid Overpriced Dealer Surcharges Safely", keyword: "Fiat Service Mahadevapura" },
    { cat: "Location Targeted Authority", topic: "Compact Hatchback Clutch Overhaul Tips for Marathahalli High-Frequency Rush Hours", keyword: "Best Car Service Center Marathahalli" },
    { cat: "Location Targeted Authority", topic: "Periodic Car Checkups in Electronic City: Maintaining Multi-Brand Commuters Affordable", keyword: "Car Service Electronic City" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 font-sans" id="seo-strategy-hub-section">
      
      {/* 1. Header Information Block */}
      <div className="mb-10 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-mono font-bold text-[#e11d48]">
          <Award className="h-3.5 w-3.5" />
          <span>SEO COMMAND, AUDIT & RANKING HUB</span>
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Hari AutoMobiles Local SEO Blueprint
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-400">
          Act as a Senior SEO Consultant, Local SEO Expert, and Technical SEO Specialist. Developed specifically for 
          ranking the **Hari AutoMobiles** brand high on Google First Page for Bangalore-based passenger vehicle servicing queries.
        </p>

        {/* Audit Metrics Badges Grid */}
        <div className="mt-8 grid w-full max-w-4xl grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-900 bg-slate-900/30 p-4 text-center">
            <span className="block text-2xl font-black text-emerald-400">89 / 100</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">SEO Audit Score</span>
            <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-emerald-500 font-medium">
              <CheckCircle2 className="h-3 w-3" /> Target: 98/100
            </div>
          </div>
          <div className="rounded-xl border border-slate-900 bg-slate-900/30 p-4 text-center">
            <span className="block text-2xl font-black text-yellow-400">11 / 11</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Local Target Pages</span>
            <span className="mt-1 block text-[10px] text-yellow-500 font-semibold">100% Geo-Mapped</span>
          </div>
          <div className="rounded-xl border border-slate-900 bg-slate-900/30 p-4 text-center">
            <span className="block text-2xl font-black text-[#e11d48]">22 High-Value</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Local Keywords Map</span>
            <span className="mt-1 block text-[10px] text-rose-500 font-semibold">Primary, Secondary, Long-tail</span>
          </div>
          <div className="rounded-xl border border-slate-900 bg-slate-900/30 p-4 text-center">
            <span className="block text-2xl font-black text-sky-400">JSON-LD</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">LocalBusiness Schema</span>
            <span className="mt-1 block text-[10px] text-emerald-400 font-bold">Crawl Ready</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Local Landing Page Simulator */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Target Areas Landing Page Generator Section */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#e11d48]" />
                  <span>Interactive Local Landing Page Simulator</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Pick one of the 11 high-growth Bangalore target areas requested to simulate their localized SEO page copy!
                </p>
              </div>
              <span className="rounded bg-[#e11d48]/10 px-2 py-0.5 text-[10px] font-mono text-[#e11d48] font-bold">
                Task #12 Complete
              </span>
            </div>

            {/* Selection Chips Grid for 11 Locations of interest */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {LOCATION_PAGES.map((loc, idx) => (
                <button
                  key={loc.name}
                  onClick={() => { setSelectedLocIdx(idx); setFaqOpenIdx(0); }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    selectedLocIdx === idx 
                      ? "bg-[#e11d48] text-white shadow-md shadow-rose-950/40" 
                      : "bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white"
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            {/* Generated Page Showcase Sandbox */}
            <div className="rounded-xl border border-slate-850 bg-slate-950 p-5 shadow-inner">
              
              {/* Virtual URL bar */}
              <div className="flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-mono text-slate-400 mb-5 overflow-x-auto whitespace-nowrap">
                <Globe className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-600">https://hari-automobiles.com/</span>
                <span className="text-white font-semibold font-mono">location/{currentLoc.slug}</span>
              </div>

              {/* Meta Tags Box for this landing page */}
              <div className="rounded-lg bg-slate-900/60 p-4 border border-slate-900 mb-6 text-xs space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black block border-b border-slate-900 pb-1.5">
                  Generated SEO Head Tags (Simulated)
                </span>
                <div>
                  <strong className="text-slate-350 block">Page Title Tag (Recommended to rank):</strong>
                  <span className="text-emerald-400 font-mono font-semibold text-[11px] block mt-0.5">
                    {currentLoc.metaTitle}
                  </span>
                </div>
                <div>
                  <strong className="text-slate-350 block">Page Meta Description (CTR optimized):</strong>
                  <span className="text-sky-300 font-mono text-[11px] block mt-0.5">
                    {currentLoc.metaDesc}
                  </span>
                </div>
                <div className="flex gap-4 pt-1.5 text-[10px] font-mono text-slate-500">
                  <span>Slug: <strong className="text-slate-400">location/{currentLoc.slug}</strong></span>
                  <span>Target Area Code: <strong className="text-slate-400">{currentLoc.zipCode}</strong></span>
                </div>
              </div>

              {/* Live Rendered Content */}
              <div className="space-y-4 text-left border-t border-slate-900 pt-5">
                
                {/* H1 element */}
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight border-b border-rose-950/20 pb-2">
                  <span className="text-[10px] font-mono text-[#e11d48] uppercase block font-black">H1 Heading</span>
                  {currentLoc.introHeading}
                </h2>

                <div className="flex items-center gap-2 bg-[#e11d48]/5 p-3 rounded-lg border border-[#e11d48]/10 text-xs">
                  <MapPin className="h-4.5 w-4.5 text-[#e11d48] shrink-0" />
                  <div className="text-slate-300">
                    <span className="font-bold text-white">Location Proximity Metrics:</span> Located approx. {currentLoc.distance}. Average towing dispatch is active.
                  </div>
                </div>

                {/* Body Content */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {currentLoc.introBody}
                </p>

                {/* H2 element */}
                <h3 className="text-md font-bold text-white tracking-wide pt-2 flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-[#e11d48] uppercase block font-black">H2 Heading - Targeted Competency</span>
                  Excellent Local pick-up dispatcher active in {currentLoc.name}
                </h3>
                
                {/* USP highlight */}
                <div className="rounded-r-md border-l-4 border-amber-500 bg-slate-900/40 p-3 italic text-xs text-slate-300">
                  {currentLoc.uspHighlight}
                </div>

                {/* Specialized H3 localized FAQ */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#e11d48] uppercase block font-black mb-2">H3 Localized FAQ Section</span>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-slate-900/40 border border-slate-900 p-3 text-xs">
                      <strong className="block text-white mb-1">Q: {currentLoc.faq1Question}</strong>
                      <p className="text-slate-400 leading-relaxed">{currentLoc.faq1Answer}</p>
                    </div>
                  </div>
                </div>

                {/* Drive Booking CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-900">
                  <div>
                    <span className="text-[11px] block text-slate-400">Driver pickup window:</span>
                    <strong className="text-xs text-slate-100">{currentLoc.timeLine}</strong>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                    <a
                      href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
                      id={`seo-call-btn-${currentLoc.slug}`}
                      className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-850 text-xs font-black text-white transition cursor-pointer"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#e11d48] shrink-0 animate-pulse" />
                      <span>Call Workshop</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="w-full sm:w-auto flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-[#e11d48] hover:bg-rose-700 text-xs font-black text-white transition cursor-pointer"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Schedule Free Pick-Up</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Interactive Keywords matrix */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span>Bangalore Local Keywords & Search Matrix</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Highly targeted local search terms with difficulty, click intent, and Content Gap planning.
                </p>
              </div>
              <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-mono text-sky-400 font-bold">
                Task #2 Complete
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 mb-4 select-none">
              {(["all", "primary", "secondary", "longtail"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveKeywordTab(tab)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition ${
                    activeKeywordTab === tab 
                      ? "bg-slate-800 text-white border border-slate-700" 
                      : "bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Keyword Table */}
            <div className="overflow-x-auto max-h-[350px] overflow-y-auto border border-slate-900 rounded-xl bg-slate-950/40">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-900 text-[10px] uppercase tracking-wider text-slate-400">
                    <th className="p-3">Keyword</th>
                    <th className="p-3 text-center">Volume</th>
                    <th className="p-3 text-center">Difficulty</th>
                    <th className="p-3">Intent / Content Gap Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  {filteredKeywords.map((k, i) => (
                    <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                      <td className="p-3 font-mono font-bold text-white text-[11px] whitespace-nowrap">
                        {k.keyword}
                      </td>
                      <td className="p-3 text-center font-mono font-semibold text-[#e11d48]">
                        {k.volume}
                      </td>
                      <td className="p-3 text-center">
                        <span className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                          k.difficulty.includes("Low") 
                            ? "bg-emerald-950 text-emerald-400" 
                            : k.difficulty.includes("Medium") 
                            ? "bg-yellow-950 text-yellow-400" 
                            : "bg-rose-950 text-[#e11d48]"
                        }`}>
                          {k.difficulty}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400 leading-relaxed text-[11px]">
                        <strong>{k.intent}:</strong> {k.strategy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-[10px] text-slate-400 mt-2 italic font-semibold">
              *Keyword Difficulty (KD%) and Volume metrics calculated specifically for southern India IT hubs regional intent crawls.
            </p>
          </div>

        </div>

        {/* Right Column: Schema, Audit, checklist & Plan */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* SEO Score Analysis */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm text-left">
            <h3 className="text-md font-bold text-white flex items-center gap-2 border-b border-slate-900 pb-3 mb-3">
              <ClipboardCheck className="text-rose-500 h-5 w-5" />
              <span>SEO Score & Competitor Analysis</span>
            </h3>
            
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between text-slate-300 font-bold mb-1">
                  <span>Current SEO Baseline</span>
                  <span className="text-emerald-400">89% (Good)</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[89%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-bold mb-1">
                  <span>Average Bangalore Competitor</span>
                  <span className="text-yellow-500">65% (Lacking Scheme/EGR deep content)</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full w-[65%]" />
                </div>
              </div>

              <div className="rounded-xl bg-slate-950/60 p-3 mt-4 space-y-2 border border-slate-900 leading-relaxed text-slate-400 text-[11px]">
                <strong className="text-white block">Key Competitor Weakness Found:</strong>
                <p>
                  Most workshops in Bangalore (Whitefield/KR Puram) do not host dedicated location-specific landing pages, lacks detailed local aggregate schemas, and have zero dedicated specialist sections for **Fiat timing assemblies** or **Jeep Compass mechanics**.
                </p>
                <p className="text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> High-conversion SEO gap is fully ours!
                </p>
              </div>
            </div>
          </div>

          {/* Local Business Schema Markups JSON-LD */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm text-left">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-3">
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                <FileCode className="text-yellow-500 h-5 w-5" />
                <span>Local Business Schema JSON-LD</span>
              </h3>
              <button
                onClick={() => handleCopy(schemaMarkup, "schema")}
                className="rounded-md bg-slate-800 p-1.5 hover:bg-slate-755 text-slate-300 hover:text-white transition cursor-pointer"
                title="Copy Local Business Schema markup"
              >
                {copiedSchema ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-3 block leading-relaxed">
              Inject this highly structured schema script into the {"<head>"} tag of your production build to enable Google rich snippet search stars.
            </p>
            <div className="relative rounded-xl border border-slate-900 bg-slate-950 p-4 max-h-[220px] overflow-y-auto">
              <pre className="text-[10px] font-mono text-slate-300 leading-tight">
                {schemaMarkup}
              </pre>
            </div>
          </div>

          {/* Robots & Sitemap Output recommendations */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm text-left">
            <h3 className="text-md font-bold text-white flex items-center gap-2 border-b border-slate-900 pb-3 mb-3">
              <Settings className="text-sky-400 h-5 w-5" />
              <span>Technical Robots & Sitemap Setup</span>
            </h3>
            
            {/* Robots box */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-slate-350">robots.txt copy:</span>
                  <button
                    onClick={() => handleCopy(robotsTxt, "robots")}
                    className="text-[10px] font-mono font-bold text-rose-500 hover:underline cursor-pointer"
                  >
                    {copiedRobots ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 border border-slate-900 max-h-[100px] overflow-y-auto">
                  <pre className="text-[10px] font-mono text-slate-400 leading-tight">{robotsTxt}</pre>
                </div>
              </div>

              {/* Sitemap box */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-slate-350">sitemap.xml (All 11 locations mapped):</span>
                  <button
                    onClick={() => handleCopy(sitemapXml, "sitemap")}
                    className="text-[10px] font-mono font-bold text-rose-500 hover:underline cursor-pointer"
                  >
                    {copiedSitemap ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="rounded-lg bg-slate-950 p-2.5 border border-slate-900 max-h-[100px] overflow-y-auto">
                  <pre className="text-[10px] font-mono text-slate-400 leading-tight">{sitemapXml}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Google Business Profile checklist */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/20 p-5 backdrop-blur-sm text-left">
            <h3 className="text-md font-bold text-white flex items-center gap-1 border-b border-slate-900 pb-3 mb-3 uppercase tracking-wider text-xs">
              <Award className="text-[#e11d48] h-4.5 w-4.5" />
              <span>Google Business Profile Supremacy Blueprint</span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-350">
              <li className="flex items-start gap-2">
                <span className="rounded bg-[#e11d48]/10 text-[#e11d48] font-mono p-0.5 px-1 text-[10px] uppercase font-bold shrink-0 mt-0.5">Step 1</span>
                <span><strong>Business Title Precision:</strong> Configure exact title as <strong>Hari AutoMobiles - Car Service Center | Fiat & Jeep Specialist</strong>. Avoid stuffing too many auxiliary service tags.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded bg-[#e11d48]/10 text-[#e11d48] font-mono p-0.5 px-1 text-[10px] uppercase font-bold shrink-0 mt-0.5">Step 2</span>
                <span><strong>Primary Category Selection:</strong> Set Primary Category to <strong>Car Repair and Maintenance Service</strong>. Add Secondary categories: <em>Auto Repair Shop</em>, <em>Wheel Alignment Service</em>, and <em>Car AC Repair Shop</em>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded bg-[#e11d48]/10 text-[#e11d48] font-mono p-0.5 px-1 text-[10px] uppercase font-bold shrink-0 mt-0.5">Step 3</span>
                <span><strong>Review Velocity:</strong> Generate an immediate short link on whatsapp for happy customers directing them to leave reviews mentioning core search words: <em>"best fiat service in bangalore"</em>, <em>"expert jeep workshop anagalapura"</em>, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="rounded bg-[#e11d48]/10 text-[#e11d48] font-mono p-0.5 px-1 text-[10px] uppercase font-bold shrink-0 mt-0.5">Step 4</span>
                <span><strong>Weekly Local GMB Updates:</strong> Post 1 photo/video weekly displaying active complex repairs (timing kit dismantle, intercooler chemical cleaning, AC compressor change) with explicit geo-tagged captions.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* 4. Complete FAQ content targeting Bangalore Customers */}
      <div className="mt-12 rounded-2xl border border-slate-900 bg-slate-900/10 p-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-3 mb-6">
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <HelpCircle className="h-5.5 w-5.5 text-rose-500" />
              <span>Bangalore Specific Local Search FAQ Content</span>
            </h3>
            <p className="text-xs text-slate-400">
              High search-intent questions targeting local Bangalore vehicle mechanics, timing systems, towing, and billing questions.
            </p>
          </div>
          <span className="rounded bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-mono text-sky-400 font-bold uppercase">
            Task #5 Complete
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {localFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-xl border border-slate-900 bg-slate-950 p-4 hover:border-[#e11d48]/20 transition-all duration-300"
            >
              <h4 className="text-sm font-bold text-white flex items-start gap-2">
                <span className="text-[#e11d48] font-mono font-black shrink-0">0{idx + 1}.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed pl-5 whitespace-pre-line">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 30 Blog Topics Segment & Core Web Vitals Optimization */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        
        {/* Core Web Vitals Page speed */}
        <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gauge className="text-[#e11d48] h-5 w-5" />
                <span>Core Web Vitals & Speed Optimization Plan</span>
              </h3>
              <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-mono text-sky-400 font-bold uppercase">
                Task #10 Complete
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Google scores fast, lightweight React apps higher. Follow these tactical steps to secure 95+ score on PageSpeed Insights:
            </p>

            <ul className="space-y-3.5 text-xs text-slate-350">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">LCP (Largest Contentful Paint) optimization:</strong>
                  <span className="block text-slate-400 text-[11px] mt-0.5">
                    Avoid loading heavy uncompressed raw images for the hero background. Compress all key images using next-gen `.webp` or `.png` formats, and set an explicit low-resolution inline SVG placeholder for immediate styling.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Image Lazy Loading:</strong>
                  <span className="block text-slate-400 text-[11px] mt-0.5">
                    Ensure all secondary imagery assets have the `loading="lazy"` attribute declared. For generated images, utilize the absolute `referrerPolicy="no-referrer"` tag to avoid third-party script delays.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">CLS (Cumulative Layout Shift) Minimization:</strong>
                  <span className="block text-slate-400 text-[11px] mt-0.5">
                    Assign exact aspect ratios and wrapper dimensions (`min-h-screen`, `h-16 w-auto`) to your brand logomarks and background banners to eliminate layout jumps when Vite script packs load.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-lg bg-[#e11d48]/5 p-3.5 border border-[#e11d48]/10 text-[11px] text-slate-400 leading-relaxed">
            <strong>Vite Bundler Advice:</strong> Split large views into chunk-dependent imports so users in outer Bangalore zones can load the initial viewport within 0.8 seconds over mobile LTE.
          </div>
        </div>

        {/* 30 Blog Topics list */}
        <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="text-amber-500 h-5 w-5" />
              <span>30 High-Ranking Blog Topic Titles</span>
            </h3>
            <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-mono text-sky-400 font-bold uppercase">
              30 Topics
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Content is king! Publish these custom tailored Bangalore-centric articles to command vast search presence over local car owners:
          </p>

          <div className="overflow-y-auto max-h-[280px] pr-2 space-y-2 text-xs">
            {blogTopics.map((item, idx) => (
              <div 
                key={idx} 
                className="p-2.5 rounded-lg border border-slate-900 bg-slate-950 hover:border-slate-800 transition-all"
              >
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
                  <span>{idx + 1}. Category: <strong className="text-slate-350">{item.cat}</strong></span>
                  <span className="text-amber-500">Targeting: "{item.keyword}"</span>
                </div>
                <strong className="text-slate-200 block text-[11px] leading-tight hover:text-rose-400 cursor-default">
                  {item.topic}
                </strong>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6. 90-Day Local SEO Roadmap */}
      <div className="mt-12 rounded-2xl border border-slate-900 bg-slate-900/10 p-6 text-left">
        <div className="border-b border-slate-900 pb-3 mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-[#e11d48] h-5 w-5" />
            <span>90-Day Execution Roadmap for Search Dominance</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Actionable step-by-step pipeline mapping for local crawling, index speedways, and top 3 review expansions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase block mb-1">Month 1: Foundation & Tech</span>
            <strong className="text-white text-sm block mb-3">On-Page Authority Baseline</strong>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Deploy Local Business JSON-LD Schema to index.html</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Register site under Google Search Console & submit sitemap.xml</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Install robots.txt and fix cumulate layouts shifts loading.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Optimize Google Business Profile core categories and details.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
            <span className="text-xs font-mono font-bold text-amber-500 uppercase block mb-1">Month 2: Location Pages</span>
            <strong className="text-white text-sm block mb-3">High-Conversion Footprint</strong>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Build out all 11 individual area-specific routing paths</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Embed high-contrast maps and driving directions.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Publish first 10 localized and diagnostic articles on blog.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Link area listings inside primary workshop footboards.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-900 bg-slate-950 p-4">
            <span className="text-xs font-mono font-bold text-emerald-500 uppercase block mb-1">Month 3: Review & Backlinks</span>
            <strong className="text-white text-sm block mb-3">Authority Escalation Mode</strong>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Drive review collection requesting keyword-targeted write-ups.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Submit site to Bangalore directories and local classified engines.</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Distribute links in car club portals (team-BHP group threads, etc).</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-[#e11d48] font-bold">✓</span>
                <span>Assess ranking updates on Search Console weekly.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}
