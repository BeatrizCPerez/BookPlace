// Slider.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './slider.css';

const Slide = ({ imageUrl }) => (
  <div className="slide">
    <img src={imageUrl} alt={`Slide Image`} className="slide-image" />
  </div>
);

const Sliderv = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=7');

        const urls = response.data.map((image) => image.download_url);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error al obtener imágenes desde Lorem Picsum:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Muestra 3 imágenes a la vez
    slidesToScroll: 1,
  };

  console.log(imageUrls); // Verifica las rutas de las imágenes en la consola

  return (
    <div className="slider">
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <Slide key={index} imageUrl={imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default Sliderv;
