export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  text: string;
}

export interface Application {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  priceText: string;
  priceSub: string;
  priceValue: number;
  badge: string;
  category: string;
  benefits: string[];
  features: Feature[];
  accentColor: string; // Tailwind color e.g., 'indigo', 'emerald'
  gradientFrom: string;
  gradientTo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
