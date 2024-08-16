import { useState } from 'react';
import s from './style.module.css'
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(null)

    const images = [
        './public/assets/img/gallery1.webp',
        './public/assets/img/gallery2.webp',
        './public/assets/img/gallery3.webp',
        './public/assets/img/gallery4.webp',
        './public/assets/img/gallery5.webp',
        './public/assets/img/gallery6.webp'
      ];

    return(
        <section className={`${s.gallery}`}>
            <div className="container">
            <div className={s.left__content}>
                <h2 className='section__title'>
                Qalereya
                </h2>
                <h3>
                SHRF kimlər üçündür?
                </h3>
                <ul>
                    <li>HR mütəxəssisləri</li>
                    <li>Sahibkar</li>
                    <li>Şirkət rəhbərləri</li>
                    <li>Top menecerlər</li>
                </ul>
            </div>

            <div className={s.right__content}>
            {images.map((image, index) => (
        <img
          key={index}
          src={image}
          onClick={() => setCurrentIndex(index)}
          style={{ cursor: 'pointer', width: '100px', marginRight: '10px' }}
          alt={`Gallery image ${index + 1}`}
        />
      ))}

      {currentIndex !== null && (
        <Lightbox
          images={images.map((src) => ({ url: src }))}
          startIndex={currentIndex}
          onClose={() => setCurrentIndex(null)}
        />
      )}
            </div>
            </div>
        </section>
    )
}