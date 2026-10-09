import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoodHighlights } from './components/FoodHighlights';
import { RestaurantStory } from './components/RestaurantStory';
import { FoodGallery } from './components/FoodGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { PageLoader } from './components/PageLoader';
import { FoodItem, GalleryItem } from './types/restaurant';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedDish, setSelectedDish] = useState<FoodItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const handleExploreFood = () => {
    const el = document.getElementById('food-highlights');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#151515] text-[#FFF2D9] selection:bg-[#F59A23] selection:text-[#151515]">
      {/* Opening Cinematic Brand Loader */}
      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      {/* Navigation Bar */}
      <Navbar />

      {/* 3D WebGL Hero Section */}
      <main>
        <Hero onExploreFood={handleExploreFood} />

        {/* Food Highlights (8 Review-Mentioned Dishes with 3D Tilt) */}
        <FoodHighlights onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* Restaurant Story ("A Place to Pause and Enjoy") */}
        <RestaurantStory />

        {/* Food Gallery with Masonry & Filters */}
        <FoodGallery onOpenLightbox={(item) => setSelectedGalleryItem(item)} />

        {/* Verified Customer Reviews (3.1/5 from 50 Google reviews) */}
        <ReviewsSection />

        {/* Location & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />

      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
