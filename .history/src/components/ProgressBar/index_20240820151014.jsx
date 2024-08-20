import { useEffect, useState } from 'react'
import s from './style.module.css'

export default function ProgressBar(){

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <hr className={s.progress__bar} style={{width : scrollTop}} />
        </>
    )
}