/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
  process: string[];
  faqs: FAQItem[];
  iconName: string;
  category: "maintenance" | "repair" | "diagnostics" | "specialist";
  priceRange: string;
}

export interface Brand {
  name: string;
  logo: string; // Inline styling/SVG key or abbreviation
  type: string; // "Premium", "Mass", "Specialist"
  logoUrl?: string;
  vehicleImage?: string;
  popularModels?: string[];
}

export interface Review {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  beforeAfter?: {
    beforeDesc: string;
    afterDesc: string;
    beforeImg: string;
    afterImg: string;
  };
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  brand: string;
  serviceType: string;
  date: string;
  time: string;
  notes?: string;
  status: "Pending" | "Confirmed" | "Completed";
  area: string;
  createdAt: string;
}

export interface LocationArea {
  name: string;
  distance: string;
  zipCode: string;
  popularCars: string;
}
