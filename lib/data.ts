export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  hoverImage: string;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  features: string[];
  capacity?: string;
}

export const products: Product[] = [
  {
    id: "atlas-carry-on",
    name: "The Atlas",
    tagline: "Cabin carry-on",
    price: 249,
    category: "suitcases",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=800&q=80",
    colors: ["#3D4A5C", "#C8B89A", "#0A0A08", "#C4541A"],
    isNew: true,
    isBestseller: false,
    capacity: "38L",
    features: ["TSA-approved lock", "360° spinner wheels", "Polycarbonate shell", "10-year warranty"],
  },
  {
    id: "ridge-backpack",
    name: "The Ridge",
    tagline: "Work & travel backpack",
    price: 179,
    category: "backpacks",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    colors: ["#0A0A08", "#3D4A5C", "#C8B89A"],
    isBestseller: true,
    capacity: "28L",
    features: ["Laptop compartment 16\"", "Water-resistant", "Hidden pockets", "Ergonomic straps"],
  },
  {
    id: "mesa-duffel",
    name: "The Mesa",
    tagline: "Weekend duffel",
    price: 199,
    originalPrice: 249,
    category: "bags",
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    colors: ["#C8B89A", "#3D4A5C", "#0A0A08"],
    isBestseller: true,
    capacity: "40L",
    features: ["Convertible straps", "Full-grain leather trim", "Wet/dry pocket", "Lifetime guarantee"],
  },
  {
    id: "nomad-wallet",
    name: "The Nomad",
    tagline: "Slim travel wallet",
    price: 89,
    category: "wallets",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    colors: ["#0A0A08", "#C8B89A", "#C4541A"],
    features: ["RFID blocking", "12 card slots", "Full-grain leather", "Slim profile"],
  },
  {
    id: "summit-check-in",
    name: "The Summit",
    tagline: "Check-in luggage",
    price: 329,
    category: "suitcases",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    colors: ["#C4541A", "#3D4A5C", "#0A0A08", "#C8B89A"],
    isNew: false,
    capacity: "68L",
    features: ["TSA-approved lock", "USB charging port", "Flex packing system", "10-year warranty"],
  },
  {
    id: "roam-tote",
    name: "The Roam",
    tagline: "Everyday tote",
    price: 149,
    category: "bags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    colors: ["#C8B89A", "#0A0A08", "#3D4A5C"],
    features: ["Magnetic closure", "Inner organizer", "Vegan leather", "Laptop sleeve 14\""],
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "suitcases", label: "Luggage" },
  { id: "backpacks", label: "Backpacks" },
  { id: "bags", label: "Bags" },
  { id: "wallets", label: "Wallets" },
];

export const testimonials = [
  {
    id: 1,
    quote: "The Atlas survived 40+ flights across 18 countries without a single scratch. This is what quality looks like.",
    author: "Priya M.",
    location: "Mumbai → NYC → London",
    rating: 5,
  },
  {
    id: 2,
    quote: "I've owned luxury luggage from other brands. Wayfare beats them all — the design, the build, the lifetime warranty.",
    author: "Karan S.",
    location: "Bengaluru",
    rating: 5,
  },
  {
    id: 3,
    quote: "The Ridge backpack goes from boardroom to mountain trail. Never thought one bag could do both this well.",
    author: "Ananya R.",
    location: "Delhi → Manali",
    rating: 5,
  },
  {
    id: 4,
    quote: "Finally — a wallet that fits everything without the bulk. The Nomad wallet is a masterpiece of design.",
    author: "Rohit T.",
    location: "Hyderabad",
    rating: 5,
  },
];
