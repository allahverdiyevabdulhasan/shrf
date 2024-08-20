import { useEffect } from 'react'
import s from './style.module.css'

export default function ProgressBar(){


    useEffect(() => {
        const pageProgressBar = document.querySelector(".progress__bar")
        document.addEventListener("scroll", () => {
          const scrolledPercentage =
              (scrollContainer().scrollTop /
                (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
              100;
          
          pageProgressBar.style.width = `${scrolledPercentage}%`
          
       
        });
        
        return () => {
            
        };
    }, []);
    return (
        <>
            <hr className={s.progress__bar} />
        </>
    )
}