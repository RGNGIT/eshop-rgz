import { useState, useEffect } from 'react';
import CarouselNextButton from "./carousel-next-button";
import CarouselPrevButton from "./carousel-prev-button";
import { getTrendingItems } from '../api';

export default function Carousel(props) {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadItems = async () => {
      const items = []; //await getTrendingItems();

      const loadedItems = [];
      for (let i = 0; i < items.length; i++) {
        const name = items[i]['name'];
        const image = items[i]['image'];

        loadedItems.push({ name, image });
      }

      setItems(loadedItems);
    };

    loadItems();
  }, []);

  const updateCarousel = (newIndex) => {
    const totalItems = items.length;
    if (totalItems > 0) {
      if (newIndex >= totalItems) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = totalItems - 1;
      }
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    updateCarousel(currentIndex + 1);
  };

  const handlePrev = () => {
    updateCarousel(currentIndex - 1);
  };

  const offset = -currentIndex * 100;

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          display: "flex",
          transform: `translateX(${offset}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="carousel-item" key={index} style={{ width: "100%" }}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>Гружу...</p>
        )}
      </div>
      <CarouselNextButton icon=">" onClick={handleNext} />
      <CarouselPrevButton icon="<" onClick={handlePrev} />
    </div>
  );
}