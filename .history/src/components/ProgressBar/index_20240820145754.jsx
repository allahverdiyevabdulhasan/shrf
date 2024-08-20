import { useEffect } from 'react'
import s from './style.module.css'

export default function ProgressBar(){


    useEffect(() => {
        window.onscroll = e => {
            console.log(e);
            
        }
        
        return () => {
            
        };
    }, []);
    return (
        <>
            <hr className={s.progress__bar} />
        </>
    )
}