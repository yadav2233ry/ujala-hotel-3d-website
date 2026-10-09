import { BusinessDetails, FoodItem, GalleryItem } from '../types/restaurant';

// Verified Business Details from Official Listing
export const BUSINESS_INFO: BusinessDetails = {
  name: 'Ujala Hotel',
  hindiName: 'उजाला होटल',
  type: 'Family Restaurant',
  address: 'JQ2F+9J9, Belwai–Phulpur Road, Darbeshpur, Mahimapur, Uttar Pradesh 222136, India',
  plusCode: 'JQ2F+9J9',
  road: 'Belwai–Phulpur Road',
  area: 'Darbeshpur, Mahimapur',
  pinCode: '222136',
  state: 'Uttar Pradesh',
  phone: '+91 94517 72419',
  rating: 3.1,
  reviewCount: 50,
  priceRange: '₹1–₹1,000 per person',
  services: ['Dine-in', 'Takeaway'],
  closingTimeNotice: 'Listed closing time: 2:00 AM. Please call ahead to verify current live opening hours.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ujala+Hotel+JQ2F%2B9J9+Belwai-Phulpur+Road+Darbeshpur+Mahimapur+Uttar+Pradesh+222136',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ujala+Hotel+Belwai-Phulpur+Road+Darbeshpur+Mahimapur+Uttar+Pradesh+222136',
};

// Verified image paths from generate_image batch
export const ASSET_IMAGES = {
  heroThali: '/src/assets/images/hero_thali_brass_1791526898539.jpg',
  paneerCurry: '/src/assets/images/paneer_curry_handi_1791526911813.jpg',
  dalTadka: '/src/assets/images/dal_tadka_bowl_1791526923367.jpg',
  crispyPakodi: '/src/assets/images/crispy_pakodi_chai_1791526933236.jpg',
  diningAmbience: '/src/assets/images/ujala_restaurant_ambience_1791526944413.jpg',
};

// The 8 dishes explicitly mentioned in customer reviews (No invented prices)
export const FOOD_HIGHLIGHTS: FoodItem[] = [
  {
    id: 'thali',
    name: 'Vegetarian Thali',
    hindiName: 'शाही शाकाहारी थाली',
    category: 'Thali',
    description: 'A traditional Indian platter served with comforting dal, seasonal sabzi, warm rotis, steamed rice, fresh salad, and accompaniments.',
    image: ASSET_IMAGES.heroThali,
    highlights: ['Pure Vegetarian', 'Multi-Bowl Platter', 'Freshly Prepared'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'paneer-curry',
    name: 'Paneer Curry',
    hindiName: 'पनीर करी',
    category: 'Curry',
    description: 'Tender cottage cheese cubes simmered in a spiced tomato-onion gravy finished with fresh coriander and warming Indian spices.',
    image: ASSET_IMAGES.paneerCurry,
    highlights: ['Vegetarian Favorite', 'Rich Spiced Gravy', 'Served Hot'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    hindiName: 'दाल तड़का',
    category: 'Curry',
    description: 'Home-style yellow lentils cooked to a creamy texture and tempered with aromatic ghee, whole cumin seeds, garlic, and red chilies.',
    image: ASSET_IMAGES.dalTadka,
    highlights: ['Aromatic Ghee Tempering', 'Comfort Classic', 'Roadside Favorite'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'palak-sabzi',
    name: 'Palak Sabzi',
    hindiName: 'पालक सब्जी',
    category: 'Curry',
    description: 'Fresh spinach greens slow-simmered with garlic, mild spices, and regional seasonings for a wholesome countryside preparation.',
    image: ASSET_IMAGES.heroThali,
    highlights: ['Fresh Leafy Greens', 'Mildly Spiced', 'Nutritious & Wholesome'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'fresh-roti',
    name: 'Fresh Roti',
    hindiName: 'ताज़ा फुल्का रोटी',
    category: 'Breads & Rice',
    description: 'Whole-wheat flatbreads rolled by hand and freshly puffed on the tawa, served warm to accompany curries and dals.',
    image: ASSET_IMAGES.heroThali,
    highlights: ['Tawa Puffed', 'Whole Wheat', 'Served Steaming Hot'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'rice',
    name: 'Steamed Rice',
    hindiName: 'बासमती चावल',
    category: 'Breads & Rice',
    description: 'Light, fragrant white rice grains cooked tender, ideal for pairing with comforting dal tadka and flavorful gravies.',
    image: ASSET_IMAGES.heroThali,
    highlights: ['Fluffy Grains', 'Freshly Steamed', 'Comfort Pair'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'crispy-pakodi',
    name: 'Crispy Pakodi',
    hindiName: 'कुरकुरी पकौड़ी',
    category: 'Snacks & Chai',
    description: 'Crisp, golden vegetable fritters battered in spiced gram flour and fried fresh, a highway stop essential.',
    image: ASSET_IMAGES.crispyPakodi,
    highlights: ['Freshly Fried', 'Crispy Texture', 'Roadside Traveler Favorite'],
    serviceType: 'Dine-in & Takeaway',
  },
  {
    id: 'chai',
    name: 'Hot Masala Chai',
    hindiName: 'कुल्हड़ मसाला चाय',
    category: 'Snacks & Chai',
    description: 'Freshly brewed strong Indian tea infused with crushed ginger and aromatic spices, offering instant warmth to weary travelers.',
    image: ASSET_IMAGES.crispyPakodi,
    highlights: ['Freshly Brewed', 'Warm Spices', 'Highway Essential'],
    serviceType: 'Dine-in & Takeaway',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Vegetarian Thali',
    hindiTitle: 'शाही शाकाहारी थाली',
    category: 'thali',
    image: ASSET_IMAGES.heroThali,
    caption: 'Illustrative presentation of a traditional Indian vegetarian platter featuring dal, paneer curry, seasonal sabzi, rotis, and fragrant rice.',
  },
  {
    id: 'gal-2',
    title: 'Paneer Curry in Brass Handi',
    hindiTitle: 'पनीर करी',
    category: 'curry',
    image: ASSET_IMAGES.paneerCurry,
    caption: 'Rich tomato and onion spiced curry with soft cottage cheese, seasoned with regional Indian spices.',
  },
  {
    id: 'gal-3',
    title: 'Aromatic Dal Tadka',
    hindiTitle: 'दाल तड़का',
    category: 'curry',
    image: ASSET_IMAGES.dalTadka,
    caption: 'Creamy yellow lentils finished with traditional ghee and cumin tempering.',
  },
  {
    id: 'gal-4',
    title: 'Crispy Pakodi & Hot Chai',
    hindiTitle: 'पकौड़ी और चाय',
    category: 'snacks',
    image: ASSET_IMAGES.crispyPakodi,
    caption: 'Freshly fried vegetable pakodis served alongside a warm cup of spiced chai.',
  },
  {
    id: 'gal-5',
    title: 'Family Dining Atmosphere',
    hindiTitle: 'पारिवारिक वातावरण',
    category: 'dining',
    image: ASSET_IMAGES.diningAmbience,
    caption: 'Welcoming dining ambiance designed for families and road travelers on the Belwai–Phulpur road.',
  },
];

// Authentic review themes based on the 3.1 rating from 50 reviews
export const REVIEW_THEMES = [
  {
    title: 'Convenient Highway Location',
    description: 'Positioned right along the Belwai–Phulpur road in Mahimapur, making it an accessible stop for commuters and long-distance road travelers.',
    metric: 'Strategic Stop',
  },
  {
    title: 'Wholesome Vegetarian Meals',
    description: 'Customers highlight the simple vegetarian preparations such as dal, roti, paneer curry, and hot tea after a long journey.',
    metric: 'Pure Veg',
  },
  {
    title: 'Quick Chai & Pakodi Breaks',
    description: 'Frequently chosen by local drivers and travelers looking for a quick evening tea and freshly fried snacks.',
    metric: 'Fresh Refreshments',
  },
  {
    title: 'Late Evening Access',
    description: 'Listed with late closing hours, serving travelers who find themselves on the highway in late evening hours.',
    metric: 'Late Night Service',
  },
];
