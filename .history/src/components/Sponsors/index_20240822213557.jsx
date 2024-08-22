import { useEffect, useState } from 'react';
import s from './style.module.css';

export default function Sponsor() {
    const [data,setData]=useState([])
    useEffect(() => {
        const getData = () => {
            fetch("http://139.59.208.152/api/sponsors/")
                .then(response => response.json())
                .then(data => setData(data))
                .catch(err => console.log("error", err))
        }
        getData();
    }, [])

    console.log(data);
    
    return(
        <section className={`${s.sponsor__section} container`}>
            <h2 className='section__title'>
            Sponsorlar
            </h2>
            <ul className={s.main__sponsors}>
                   {data.length>10 && (<>
                    <li><a href=""><img src={data[10].image} alt="" /></a></li>
                     <li><a href=""><img src={data[9].image} alt="" /></a></li>
                   </>)}
                   
                
               
            </ul>
             <ul className={s.other__sponsors}>
                {data.slice(0, 8).map((item, index) => (
                    <li key={index}><a href=""><img src={item.image} alt="" /></a></li>
                ))}
                </ul>
        </section>
    )
}