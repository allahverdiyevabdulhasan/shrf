import { useState } from 'react';
import s from './style.module.css'
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(null);
    

    const images = [
        '/assets/img/gallery1.webp',
        '/assets/img/gallery2.webp',
        '/assets/img/gallery3.webp',
        '/assets/img/gallery4.webp',
        '/assets/img/gallery5.webp',
        '/assets/img/gallery6.webp'
    ];

    const getImages = async () => {
        const res = await fetch('GET','http://139.59.208.152/api/gallery/').then(res => res.json());

        console.log(res);
        
    }

    useEffect(() => {
        
        return () => {
            
        };
    }, []);

    return (
       <>
         <section className={`${s.gallery}`} id='gallery'>
            <div className={`container ${s.gallery__content}`}>
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
                       <div className={s.img}>
                         <img
                            key={index}
                            src={image}
                            onClick={() => setCurrentIndex(index)}
                            alt={`Gallery image ${index + 1}`}
                        />
                       </div>
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

        <section className={s.features}>
                <div className="container">
                <article>
                    <div className={s.feature__icon}>
                    <img src="/assets/img/feature1.webp" alt="" />

                    </div>
                    <h4>
                    Strateji HR trendləri
                    </h4>
                    <p>
                    Strateji HR ilə bağlı fikirlər və təcrübələrlə tanışlıq
                    </p>
                </article>

                <article>
                    <div className={s.feature__icon}>
                    <img src="/assets/img/feature2.webp" alt="" />

                    </div>
                    <h4>
                    CEO-ların gözündə HR
                    </h4>
                    <p>
                    Müzakirələr vasitəsilə strateji HR ilə bağlı önəmli suallara cavabların tapılması
                    </p>
                </article>

                <article>
                    <div className={s.feature__icon}>
                    <img src="/assets/img/feature3.webp" alt="" />

                    </div>
                    <h4>
                    Performansı necə yüksəldək?
                    </h4>
                    <p>
                    Biznes adamları ilə networking imkanı
                    </p>
                </article>
                </div>
        </section>
       
       </>
    )
}