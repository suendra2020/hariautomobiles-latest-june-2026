/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Brand, Review, LocationArea } from "./types";

export const BRANDS: Brand[] = [
  { 
    name: "Fiat", 
    logo: "FIAT", 
    type: "Specialist",
    vehicleImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Linea Multijet", "Punto Abarth", "Avventura", "Palio Stile"]
  },
  { 
    name: "Jeep", 
    logo: "JEEP", 
    type: "Specialist",
    vehicleImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Compass Trailhawk", "Wrangler Rubicon", "Meridian 4x4", "Grand Cherokee"]
  },
  { 
    name: "Maruti Suzuki", 
    logo: "MS", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Swift ZXi", "Baleno Delta", "Brezza SmartHybrid", "Ertiga VXI"]
  },
  { 
    name: "Hyundai", 
    logo: "HYU", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Creta SX(O)", "i20 Asta", "Verna Turbo", "Venue SX"]
  },
  { 
    name: "Tata", 
    logo: "TATA", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1681313490911-3ba696f0ff20?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Nexon EV", "Harrier Dark", "Safari Kryotec", "Altroz i-Turbo"]
  },
  { 
    name: "Mahindra", 
    logo: "M&M", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Thar mHawk", "XUV700 AX7L", "Scorpio-N Z8L", "XUV300 Turbo"]
  },
  { 
    name: "Honda", 
    logo: "HONDA", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=80",
    popularModels: ["City i-VTEC", "Amaze S-iDTEC", "Civic 1.8V", "Elevate ZX"]
  },
  { 
    name: "Toyota", 
    logo: "TOY", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Innova Crysta", "Fortuner Legender", "Glanza V", "Camry Hybrid"]
  },
  { 
    name: "Kia", 
    logo: "KIA", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Seltos GT-Line", "Sonet GTX+", "Carens Luxury", "Carnival Limousine"]
  },
  { 
    name: "Volkswagen", 
    logo: "VW", 
    type: "Premium",
    vehicleImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Polo GT TSI", "Virtus GT Plus", "Taigun Highline", "Tiguan Elegance"]
  },
  { 
    name: "Skoda", 
    logo: "SKO", 
    type: "Premium",
    vehicleImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Octavia L&K", "Superb Sportline", "Slavia Style", "Kushaq Monte Carlo"]
  },
  { 
    name: "Ford", 
    logo: "FORD", 
    type: "Premium",
    vehicleImage: "https://images.unsplash.com/photo-1551829142-d9b810bf202e?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Endeavour 3.2 4x4", "EcoSport EcoBoost", "Figo Sports", "Aspire Titanium"]
  },
  { 
    name: "Renault", 
    logo: "REN", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Duster RxZ AWD", "Triber RxZ", "Kiger Turbo", "Kwid Climber"]
  },
  { 
    name: "Nissan", 
    logo: "NIS", 
    type: "Mass",
    vehicleImage: "https://images.unsplash.com/photo-1566008889998-f5c401a742d9?w=600&auto=format&fit=crop&q=80",
    popularModels: ["Magnite Turbo XV", "Kicks XV Premium", "Micra Active", "Terrano XV dCi"]
  }
];

export const BANGALORE_AREAS: LocationArea[] = [
  { name: "Anagalapura", distance: "0 km - Local Hub", zipCode: "560077", popularCars: "Jeep Compass, Fiat Linea, Tata Nexon" },
  { name: "Kada Agrahara", distance: "1.2 km away", zipCode: "560077", popularCars: "Toyota Innova, Jeep Meridian, VW Polo" },
  { name: "Chikkagubbi", distance: "3.0 km away", zipCode: "560077", popularCars: "Maruti Swift, Honda City, Hyundai i20" },
  { name: "Kannur", distance: "4.5 km away", zipCode: "562149", popularCars: "Hyundai Creta, Mahindra XUV700, Fiat Punto" },
  { name: "Hennur", distance: "6.0 km away", zipCode: "560043", popularCars: "Tata Safari, Renault Duster, Skoda Octavia" },
  { name: "Thanisandra", distance: "7.5 km away", zipCode: "560077", popularCars: "Maruti Baleno, Honda Amaze, Kia Seltos" },
  { name: "Manyata Tech Park", distance: "9.0 km away", zipCode: "560045", popularCars: "Skoda Rapid, Hyundai i10, Tata Altroz" },
  { name: "Bagalur", distance: "8.2 km away", zipCode: "562149", popularCars: "Mahindra Scorpio, Toyota Fortuner, Hyundai Verna" },
  { name: "Kothanur", distance: "5.5 km away", zipCode: "560077", popularCars: "Jeep Compass Trailhawk, VW Taigun, Honda City DSG" },
  { name: "KR Puram", distance: "11.0 km away", zipCode: "560036", popularCars: "Hyundai Venue, Nissan Magnite, Renault Kwid" },
  { name: "Whitefield", distance: "16.0 km away", zipCode: "560066", popularCars: "Jeep Wrangler, Skoda Superb, Tata Tigor" }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Rohan Deshmukh",
    vehicle: "Jeep Compass 2.0 Diesel",
    rating: 5,
    date: "2026-05-18",
    text: "Hari Automobiles is by far the finest workshop in Bangalore for Jeep Compass servicing. Jeep workshops are extremely expensive, but Hari Automobiles resolved my suspension rattle and serviced the car at half the price using genuine Mopar parts. Absolute transparency!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    beforeAfter: {
      beforeDesc: "Severe clunking noise from front suspension, worn out lower arms and link rods causing instability.",
      afterDesc: "Replaced with OEM suspension elements. Perfect stability, 100% silent ride verified on high-speed runs.",
      beforeImg: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=500&fit=crop&q=80"
    }
  },
  {
    id: "rev2",
    author: "Meera Nair",
    vehicle: "Fiat Linea 1.3 Multijet",
    rating: 5,
    date: "2026-05-24",
    text: "Finding a reliable Fiat service in Bangalore is hard since Fiat official service closed. Hari Automobiles are true Fiat specialists. They did a total clutch replacement and engine service. The gear shifts are now buttery smooth, and fuel efficiency restored. Very honest mechanics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    beforeAfter: {
      beforeDesc: "Slipping clutch, hard gear engagement, poor pickup and 11 km/l fuel economy.",
      afterDesc: "Fitted original Valeo Clutch Kit and flywheel grinding. Ultra smooth gear shifts, fuel economy up to 17 km/l.",
      beforeImg: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=500&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500&fit=crop&q=80"
    }
  },
  {
    id: "rev3",
    author: "Ananth Ramachandran",
    vehicle: "Tata Nexon EV",
    rating: 5,
    date: "2026-06-02",
    text: "Excellent experience with brake pad replacement and periodic diagnostics. They used OBD scanners to calibrate sensors. High level of technical competence. Very professional staff and prompt updates via WhatsApp with photos of old parts.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
  },
  {
    id: "rev4",
    author: "Siddharth Sen",
    vehicle: "Volkswagen GT TSI",
    rating: 5,
    date: "2026-06-05",
    text: "Hari Automobiles fixed a complicated electrical issue and battery replacement on my DSG Polo. Other workshops gave me an estimate of 40k but Hari diagnosed a simple blown relay. Professional, skilled, and honest. Will always recommend them.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80"
  }
];

export const SERVICES: Service[] = [
  {
    id: "periodic-maintenance",
    title: "Periodic Car Service",
    shortDesc: "Comprehensive synthetic oil change, filters replacement, and 40-point safety checkup.",
    description: "Keep your car running in mint condition with our structured periodic maintenance service. Recommended every 10,000 km or 1 year, we ensure your vehicles engine oil, coolant, filters, and safety features are in flawless state.",
    benefits: [
      "Extends engine lifespan and prevents mechanical Wear-and-Tear",
      "Improves fuel mileage up to 15%",
      "Maintains optimal braking performance & driving safety",
      "Full diagnostic check highlights minor issues before they become expensive"
    ],
    process: [
      "Engine oil draining & replacement with Premium Full Synthetic oil (5W-30 / 5W-40)",
      "Oil Filter and Air Filter replacement with OEM grade parts",
      "Cabin / AC Filter cleaning or replacement",
      "Coolant, Brake fluid & Windshield washer fluid top-up",
      "Spark plug inspection & cleaning (for petrol engines)",
      "40-point visual inspection including brake pads, suspension, belts, hoses, and lights",
      "Resetting of Dashboard service indicator lights via OBD tool"
    ],
    faqs: [
      {
        question: "How long does a periodic maintenance service take?",
        answer: "Typically, a comprehensive periodic car service takes 3 to 4 hours. We also offer pick-up and drop-off in Anagalapura, Hennur, Thanisandra, Bagalur, and surrounding areas."
      },
      {
        question: "Do you use brand-authorized synthetic oils?",
        answer: "Yes, we exclusively use manufacturer-approved synthetic oils such as Mobil1, Shell Helix, and Castrol Edge matching your car's specifications."
      }
    ],
    iconName: "Wrench",
    category: "maintenance",
    priceRange: "₹2,999 - ₹8,499 (Depending on Engine size & Hatchback/SUV class)"
  },
  {
    id: "engine-diagnostics",
    title: "Advanced Engine Diagnostics",
    shortDesc: "Precise ECU error code scanning, sensor evaluations, and pinpoint mechanical troubleshooting.",
    description: "Is your engine warning light on or experiencing unexpected RPM drops, lag, or poor pick-up? Our state-of-the-art OBD diagnostics scanners interface with your car's Engine Control Unit (ECU) to pinpoint issues with extreme accuracy.",
    benefits: [
      "Accurate diagnostics prevents trial-and-error part replacement",
      "Verifies real-time sensor streams (MAF, O2, Crankshaft, Injectors)",
      "Prevents severe engine damage by identifying catalytic or timing abnormalities early",
      "Ensures optimal air-fuel ratio and emission standard compliance"
    ],
    process: [
      "Connect advanced diagnostic scanner (Launch / Bosch) into car's OBD-II port",
      "Read active and historical Diagnostic Trouble Codes (DTCs)",
      "Live data monitoring of cylinder firing, manifold pressure, and fuel trims",
      "Actuator testing and physical inspection of ignition coils, wiring looms, and vacuum lines",
      "Provide complete diagnostic report to owner via WhatsApp before proceeding with repairs"
    ],
    faqs: [
      {
        question: "Why is my 'Check Engine Light' flashing?",
        answer: "A flashing check engine light indicates a severe issue like engine misfire, which can damage your catalytic converter. You should stop driving immediately and call us for roadside towing/assistance."
      }
    ],
    iconName: "Cpu",
    category: "diagnostics",
    priceRange: "₹800 - ₹1,500 (Diagnostic scanning & basic tracing)"
  },
  {
    id: "clutch-repair",
    title: "Premium Clutch Repairs & Overhaul",
    shortDesc: "Complete clutch plate, pressure plate, and release bearing replacement with flywheel turning.",
    description: "Are you suffering from a hard clutch pedal, shuddering when releasing, or engine racing without speed pickup? We specialize in installing original Valeo, LUK, and brand-genuine clutch assembly kits to restore smooth engagement and crisp acceleration.",
    benefits: [
      "Restores original buttery-smooth clutch pedal effort",
      "Eliminates initial acceleration shudder and engine lag",
      "Restores maximum engine torque coupling to transmission",
      "Improves fuel economy significantly by stopping clutch slip"
    ],
    process: [
      "Gearbox assembly removal and physical inspection of release fork, flywheel, and inputs",
      "Check flywheel for heat spots; perform precision surface turning or replacement",
      "Replace worn Clutch Plate (friction disc), Pressure Plate, and Release Bearing",
      "Replace gearbox gear oil (synthetic grade) and inspect input shaft oil seals",
      "Replace clutch master and slave cylinder assemblies if fluid leak or bypass is found",
      "Bleed clutch hydraulic system and perform road-test for bite-point adjustments"
    ],
    faqs: [
      {
        question: "When should I replace my car's clutch?",
        answer: "An average car clutch in Bangalore traffic lasts between 60,000 km to 90,000 km. Signs of failure include slipping acceleration on flyovers, burning smell, or a hard pedal."
      }
    ],
    iconName: "Activity",
    category: "repair",
    priceRange: "₹6,499 - ₹18,999 (Depending on Single/Dual-mass flywheel & vehicle model)"
  },
  {
    id: "suspension-repair",
    title: "Robust Suspension Repairs",
    shortDesc: "Eliminate rattles, clunks & bumps. Shocks, strut mounts, lower arms, and link rod replacement.",
    description: "Bangalore road potholes can degrade your car's ride comfort and steering precision. We offer complete suspension overhauls from major premium brands, replacing shock absorbers, control arms, sway bar links, and silent block bushings to restore that premium showroom-smooth ride.",
    benefits: [
      "Restores precise steering response, cornering control, and high-speed stability",
      "Eliminates irritating knocking or squeaking noises over bumps",
      "Ensures uniform tire wear by maintaining correct geometry",
      "Protects other structural components from heavy vibration damage"
    ],
    process: [
      "Comprehensive test drive on uneven roads to isolate specific corner rattling",
      "Under-chassis hydraulic platform inspection of bushings, strut mounts, and ball joints",
      "Dismantling of front/rear struts and compression of coil springs",
      "Replacement of worn shock absorbers (Monroe / Gabriel / OEM) and strut mounts",
      "Replacement of cracked lower arm bushings, stabilizer links, and steering tie rod ends",
      "Follow-up secondary test drive and mandatory 3D wheel alignment"
    ],
    faqs: [
      {
        question: "How do I know my suspension needs service?",
        answer: "If your car bounces repeatedly after hitting a pothole, pulls to one side, makes loud metallic thuds over speed breakers, or feels unstable above 80 km/h, your suspension needs urgent inspection."
      }
    ],
    iconName: "Maximize",
    category: "repair",
    priceRange: "₹1,500 check + parts replacement estimation"
  },
  {
    id: "ac-service",
    title: "Complete AC Service & HVAC Repairs",
    shortDesc: "Eco-friendly gas charging, compressor diagnostic, condenser wash, and leak testing.",
    description: "Beat the Bangalore heat with an icy-cold cabin! Our specialized HVAC setup tests for leaks inside your AC lines, performs deep coil cleaning, removes foul odors, and replaces refrigerant with precision R134a weight measures.",
    benefits: [
      "Drastic reduction in cabin temperature in seconds",
      "Removes bacteria, micro-dust, and musty mildew odors from cooling coils",
      "Reduces engine load and improves overall fuel consumption",
      "Restores efficient defogging during heavy monsoon rains"
    ],
    process: [
      "Measurement of cabin vent temperature and blower velocity",
      "Manifold gauge testing of high-pressure and low-pressure AC lines",
      "Nitrogen pressure leak test to isolate cracks in condenser, evaporator or piping",
      "Evaporator coil sanitization and cabin pollen filter replacement",
      "VACUUM testing of the line to extract ambient moisture before charging",
      "Recharging precise refrigerant gas weight and adding premium PAG compressor oil"
    ],
    faqs: [
      {
        question: "Why has my car's AC stopped cooling suddenly?",
        answer: "The most common reasons are refrigerant gas leak, clogged cabin air filter, or an inactive AC compressor clutch relay. We will diagnose and tell you the exact issue before repairing."
      }
    ],
    iconName: "Wind",
    category: "maintenance",
    priceRange: "₹1,499 - ₹3,499 (Including basic gas refilling & cleaning)"
  },
  {
    id: "brake-repair",
    title: "High-Performance Brake Service & Calipers",
    shortDesc: "OEM brake pad replacement, brake disc skim-turning, and bleeding with DOT4 fluid.",
    description: "Brakes are your automotive safety lifeline. We execute meticulous brake diagnostics, cleaning, caliper lubrication, disc inspection, and replacement of brake pads using elite brands like Brembo, TVS, Bosch, or OEM factory standards.",
    benefits: [
      "Guarantees shortest possible stopping distance under emergencies",
      "Eliminates brake squealing, grinding sounds, and steering shudder under braking",
      "Ensures stable braking without vehicle swerve or rear-end sliding",
      "Maintains flawless ABS, EBD, and traction control feedback loops"
    ],
    process: [
      "Wheel dismantling and caliper assembly cleaning using special brake-cleaner spray",
      "Measurement of brake pad friction thickness; recommendations based on wear safety limits",
      "Check brake disc rotor thickness and run-out using a dial gauge; perform skimming or replace",
      "Clean caliper slide pins and apply high-temperature grease to prevent caliper jam",
      "Flush old brake fluid and bleed air out of hydraulic lines with fresh premium DOT 4 fluid",
      "Perform high-speed braking tests to verify safety and ABS trigger response"
    ],
    faqs: [
      {
        question: "How often should brake pads be serviced?",
        answer: "Brake pads usually last 25,000 km to 40,000 km in city traffic. We recommend a general brake cleaning and caliper greasing service every 10,000 km to maintain peak response."
      }
    ],
    iconName: "ShieldAlert",
    category: "repair",
    priceRange: "₹999 + Spare Brake Pad cost"
  },
  {
    id: "battery-replacement",
    title: "Genuine Battery Replacement & Electricals",
    shortDesc: "Authorised Exide & Amaron dealer. Instant installation with 48+ months warranty.",
    description: "Avoid early morning cranking issues with our instant on-site and in-shop car battery testing and replacement. We supply 100% genuine Amaron and Exide batteries equipped with active manufacturer warranty cards and buy-back discounts for your older batteries.",
    benefits: [
      "Guarantees effortless, crisp engine starts in any weather",
      "Includes original manufacturer stamped warranty cards with up to 66 months backup",
      "Maintains steady voltage to support complex electronics, ECUs, and music players",
      "Eco-friendly disposal of scrap batteries with high trade-in discounts"
    ],
    process: [
      "Battery health scanning using dynamic resistance load testers (cranking & charging voltage)",
      "Alternator current output test to ensure car is charging the battery correctly",
      "Safe extraction of the old battery while preserving car memory via memory-saver tool",
      "Cleaning battery bracket and terminal clamps; wire brush treatment to remove white corrosion",
      "New battery installation and application of protective petroleum jelly / battery spray",
      "Registering battery to ECU (for luxury vehicles with battery energy managers)"
    ],
    faqs: [
      {
        question: "Do you offer doorstep battery delivery and jumpstart?",
        answer: "Yes, we provide emergency battery replacement and jumpstart services around Anagalapura, Kada Agrahara, Hennur, Thanisandra, and surrounding North/East Bangalore zones."
      }
    ],
    iconName: "BatteryCharging",
    category: "maintenance",
    priceRange: "₹3,200 - ₹7,500 (Depending on car capacity post trade-in rebate)"
  },
  {
    id: "electrical-diagnostics",
    title: "Electrical Diagnostics & Car Wiring",
    shortDesc: "Intricate wiring repair, speedometer fixes, relays, lighting, and power window repair.",
    description: "Modern cars rely heavily on complex multiplexed CAN-bus wiring. Our specialist auto electricians diagnose power window failures, central locking glitches, dashboard warnings, fuse blowing, horn issues, and malfunctioning sensors with detailed wire diagrams.",
    benefits: [
      "Pinpoint electrical diagnostics prevents wrong component replacements",
      "Protects modules from melting, short-circuits, or fire hazards",
      "Restores full functionality of creature comforts (sunroofs, screens, central locks)",
      "Strict use of heat-shrink sleeves and premium copper wires ensures long-term safety"
    ],
    process: [
      "Tracing current flows using specialized multi-meters and probe pens",
      "Checking fuse blocks, checking relay triggers, and reviewing circuit diagrams",
      "Dismantling trims carefully to access target switches (e.g., door locks, window motors)",
      "Soldering/wrapping connections using premium insulating tape and heat-shrink tubings",
      "Functional tests under maximum load to ensure no auxiliary battery drain exists"
    ],
    faqs: [
      {
        question: "Can you fix power windows that operate too slowly?",
        answer: "Yes, sluggish window operation is usually due to dust inside of felt channels or a weak motor regulator. We clean, grease, or replace them as required."
      }
    ],
    iconName: "Zap",
    category: "diagnostics",
    priceRange: "₹500 - ₹2,500 (Diagnostic tracing charges)"
  },
  {
    id: "wheel-alignment",
    title: "3D Wheel Alignment & Balancing",
    shortDesc: "Precision 3D aligner, tire balancing, rotation and safety inspections.",
    description: "Does your vehicle pull to the left or right, or is your steering wheel off-center on high-speed highways? Our precision digital 3D Alignment system aligns your wheels' caster, camber, and toe according to factory specifications, preserving your expensive tires.",
    benefits: [
      "Increases tire lifespan up to 40% by stopping uneven tread wear",
      "Improves directional steering precision and highway cruising stability",
      "Improves fuel efficiency by minimizing tire friction resistance",
      "Removes uncomfortable steering wheel vibration at crucial speeds (80-120 km/h)"
    ],
    process: [
      "Install high-resolution optical target sensors on all four wheels",
      "Perform digital rolling compensation to capture 3D chassis geometry",
      "Adjust mechanical steering tie rods, control arm bolts to zero out toe and camber errors",
      "Balance wheels on a dynamic spin balancing machine, adding precise weight clips",
      "Tire rotation (crossing front-to-back) for equivalent tread wear on all 4 corners"
    ],
    faqs: [
      {
        question: "How often matches wheel alignment should be performed?",
        answer: "We strongly recommend wheel alignment, wheel balancing, and tire rotation every 5,000 km to 10,000 km, or immediately after driving into deep potholes."
      }
    ],
    iconName: "Compass",
    category: "maintenance",
    priceRange: "₹800 - ₹1,200 (Complete 3D alignment & dynamic balancing)"
  },
  {
    id: "insurance-repairs",
    title: "Accident & Insurance Claim Repairs",
    shortDesc: "Complete cashless insurance assistance, dent removal, painting and panel repairs.",
    description: "Involved in a collision? Let Hari Automobiles handle the stress. We provide bumper-to-bumper car denting and painting services in our climate-regulated spray booth, alongside exhaustive assistance for cashless claims with major Indian auto insurance providers.",
    benefits: [
      "Comprehensive cashless claims management directly with surveyors",
      "High-grade DuPont paint utilization matching original factory finishes",
      "Precision structural panel pulling and robotic spot welding restores safety",
      "Significant savings on insurance processing with zero stress for vehicle owner"
    ],
    process: [
      "Calculate damage restoration cost estimates and help file claim papers",
      "Arrange surveyor appointment at our Bangalore workshop for spot inspection",
      "Precision panel beating, dent denting, and fiber-filler structural reshaping",
      "Multi-stage primers and high-bake painting matching manufacturer paint codes",
      "Assembling parts, final surface polishing to erase swirl marks, and washing before delivery"
    ],
    faqs: [
      {
        question: "Which insurance companies do you link with?",
        answer: "We partner with ICICI Lombard, HDFC Ergo, Oriental, Royal Sundaram, Tata AIG, SBI General, Bajaj Allianz, and many other providers."
      }
    ],
    iconName: "ShieldCheck",
    category: "specialist",
    priceRange: "Free claim assessment, estimate as per industry standard Gic calculations"
  },
  {
    id: "fiat-specialist",
    title: "Fiat Service Specialist - Bangalore's Best",
    shortDesc: "Genuine Fiat parts, Punto/Linea Multijet & T-Jet expert tuning, timing & turbo rebuilds.",
    description: "Hari Automobiles is legendary in Bangalore for Fiat Punto, Linea, Avventura, and Palio expertise. Since official Fiat dealership portals are retired, we acquired specialized mechanical tools, timing jigs, and authentic spare supply chains to service premium Fiat builds.",
    benefits: [
      "Bangalore's premium independent library of genuine Fiat spares (Mopar, Valeo, Magneti Marelli)",
      "Special mechanical jigs for diesel 1.3L Multijet and petrol 1.4L T-Jet / Abarth engines",
      "Full expertise in complex Fiat dualogic AMT gearboxes and classic steering racks",
      "Dedicated mechanical team with decade-plus specialized Fiat technical coaching"
    ],
    process: [
      "Detailed health check focusing on common Fiat issues (suspension mounts, timing chain slap, turbo plumbing)",
      "Timing chain replacement utilizing OEM mechanical lock pins",
      "ECU diagnostic scans for custom airbag/ABS steering angle re-calibrations",
      "Cooling system leak checking, specific Fiat Paraflu coolant replacement"
    ],
    faqs: [
      {
        question: "Is it hard to find genuine parts for Fiat in Bangalore?",
        answer: "Not with us. We have built reliable wholesale sourcing of original Fiat/Mopar parts from suppliers across India. Your Fiat is in safe, professional hands."
      }
    ],
    iconName: "Shield",
    category: "specialist",
    priceRange: "Customized according to scope (Competitive rates with premium parts assurance)"
  },
  {
    id: "jeep-specialist",
    title: "Jeep Service Specialist (Compass, Meridian & Wrangler)",
    shortDesc: "Jeep 2.0 Multijet diesel tuning, suspension overhauls, 4x4 transfer care, dealership-grade scanner.",
    description: "Maintain your off-roader's robust DNA without the astronomical dealership fees. We specialize in Jeep Compass, Meridian, and Wrangler maintenance, utilizing dealership-grade computer diagnostics systems and premium mechanical tools.",
    benefits: [
      "Dealership quality care at roughly 45% lower bills",
      "Highly skilled mechanics expert with FCA Jeep systems (Fiat-Chrysler Automobiles)",
      "Strict use of original Mopar parts, synthetic engine fluids, and quality filters",
      "Detailed 4x4 transfer case, diff oil check, and active drive mode test runs"
    ],
    process: [
      "Inspect oil sump, high-pressure injectors, turbo charger intercooler pathways",
      "Perform diagnostic scan using specialized FCA diagnostic protocols",
      "Expert brake caliper bracket lubrication to fix standard Jeep rear brake pad squeal",
      "Exhaustive particulate filter (DPF) regeneration and AdBlue diesel-exhaust fluid refills"
    ],
    faqs: [
      {
        question: "Will my Jeep warranty be affected at an independent garage?",
        answer: "By using genuine OEM factory parts, we follow official Jeep maintenance checklists. We provide clean invoice backups showing absolute compliance with mechanical guidelines."
      }
    ],
    iconName: "Car",
    category: "specialist",
    priceRange: "₹5,499 - ₹12,999 (Periodic premium interval maintenance)"
  },
  {
    id: "multibrand-car-repair",
    title: "Multi-Brand Car Repair & Care",
    shortDesc: "Complete bumper-to-bumper repair for Maruti, Hyundai, Tata, Honda, Toyota, Volkswagen etc.",
    description: "Whether you drive a Japanese city hatchback, an Indian off-road SUV, or a German precision sedan, we are your one-stop workshop. Our team is trained across Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Skoda, Volkswagen, and Renault formats.",
    benefits: [
      "Eliminates the hassle of visiting different workshops for different family cars",
      "Access to extensive spare databases spanning Asian, European, and American makes",
      "Uniform premium service quality with honest pricing, no upselling",
      "Conveniently placed in North-East Bangalore's growing hub (Anagalapura, Kada Agrahara corridor)"
    ],
    process: [
      "Job card registration detailing customer complaints and specific driving behaviors",
      "Immediate vehicle inspection and digital job card estimate sharing on WhatsApp",
      "Dedicated certified mechanic assigned to target systems (engine, electrical or suspension)",
      "Customer verification of replaced parts (old parts are placed in the boot as visual proof)"
    ],
    faqs: [
      {
        question: "Do you provide car pick-up and drop for service?",
        answer: "Yes, we arrange prompt and secure driver pick-up and back-drop across all IT hubs and residential areas of East Bangalore."
      }
    ],
    iconName: "CheckCircle",
    category: "specialist",
    priceRange: "Depends on model and repair details"
  }
];

export const SEO_DATA = {
  title: "Hari Automobiles - Best Car Service Center Bangalore | Multi Brand Car Repair",
  description: "Trusted multi-brand car repair & service center in Anagalapura, Bangalore. Fiat & Jeep specialists. Advanced diagnostics, engine, suspension, clutch, AC, and premium repairs. Book an expert appointment near Kada Agrahara, Hennur, and Thanisandra today.",
  keywords: "Car Service Center Bangalore, Car Repair Bangalore, Multi Brand Car Service Bangalore, Anagalapura, Kada Agrahara Main Rd, Fiat Service Center Bangalore, Jeep Service Center Bangalore, Car Mechanic Bangalore, Best Car Workshop Bangalore, Hennur, Thanisandra, Bagalur",
  author: "Hari Automobiles Bangalore",
  address: "St, Antony's road, Kada Agrahara Main Rd, opp. TimberLand creation, Lovedale, Anagalapura, Karnataka 560077",
  phone: "+91 89711 94430",
  phoneDisplay: "089711 94430",
  whatsapp: "+918971194430",
  email: "service@hariautomobiles.com",
  hours: "Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: Closed (Emergency Support Active)",
  mapsEmbed: "https://maps.google.com/maps?q=Hari%20Automobiles,%20St,Antony's%20road,%20Kada%20Agrahara%20Main%20Rd,%20opp.%20TimberLand%20creation,%20Lovedale,%20Anagalapura,%20Karnataka%20560077&t=&z=16&ie=UTF8&iwloc=&output=embed"
};
