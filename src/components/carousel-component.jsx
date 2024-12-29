import { useState, useEffect } from 'react';
import CarouselNextButton from "./carousel-next-button";
import CarouselPrevButton from "./carousel-prev-button";

export default function Carousel(props) {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadXMLItems = async () => {
      const xmlText = `<?xml version="1.0" encoding="UTF-8"?>
<items>
    <item>
        <name>Футболка спортивная</name>
        <image>images/nike-shirt.jpg</image>
    </item>
    <item>
        <name>Кроссовки</name>
        <image>images/adidas-sneakers.jpg</image>
    </item>
    <item>
        <name>Шорты спортивные</name>
        <image>images/puma-shorts.jpg</image>
    </item>
    <item>
        <name>Толстовка спортивная</name>
        <image>images/tnf.png</image>
    </item>
    <item>
        <name>Кепка</name>
        <image>images/item5.jpg</image>
    </item>
    <item>
        <name>Беговые брюки</name>
        <image>images/item6.jpg</image>
    </item>
    <item>
        <name>Спортивный костюм</name>
        <image>images/item7.jpg</image>
    </item>
</items>`;
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "application/xml");

      const itemsFromXML = xml.getElementsByTagName('item');
      const loadedItems = [];

      for (let i = 0; i < itemsFromXML.length; i++) {
        const name = itemsFromXML[i].getElementsByTagName('name')[0].textContent;
        const image = itemsFromXML[i].getElementsByTagName('image')[0].textContent;

        loadedItems.push({ name, image });
      }

      setItems(loadedItems);
    };

    loadXMLItems();
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