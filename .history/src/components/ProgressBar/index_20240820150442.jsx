import { useEffect } from 'react'
import s from './style.module.css'

export default function ProgressBar(){


    useEffect(() => {
        const pageProgressBar = document.querySelector(".progress__bar")
        document.addEventListener("scroll", (e) => {
          
          console.log(e);
          
       
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