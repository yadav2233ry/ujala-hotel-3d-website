export interface FoodItem {
  id: string;
  name: string;
  hindiName: string;
  category: 'Thali' | 'Curry' | 'Breads & Rice' | 'Snacks & Chai';
  description: string;
  image: string;
  highlights: string[];
  serviceType: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'thali' | 'curry' | 'snacks' | 'dining';
  image: string;
  caption: string;
}

export interface BusinessDetails {
  name: string;
  hindiName: string;
  type: string;
  address: string;
  plusCode: string;
  road: string;
  area: string;
  pinCode: string;
  state: string;
  phone: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  services: string[];
  closingTimeNotice: string;
  mapsUrl: string;
  directionsUrl: string;
}
