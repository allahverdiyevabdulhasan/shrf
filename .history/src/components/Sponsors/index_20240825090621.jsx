import { useEffect, useState } from 'react';
import s from './style.module.css';

export default function Sponsor() {
    const [data,setData]=useState([])
    useEffect(() => {
        const getData = () => {
            fetch("https://neymanacademy.shop/api/sponsors/")
                .then(response => response.json())
                .then(data => setData(data))
                .catch(err => console.log("error", err))
                
        }
        getData();
    }, [])

    console.log(data);
    
    
    return(
        <section className={`${s.sponsor__section} container`} id='sponsors'>
            <h2 className='section__title'>
            Sponsorlar
            </h2>
            <ul className={s.main__sponsors}>
                   {data.length && (<>
                    <li><a href={data[4].website_link} target='_blank'><img src={data[4].image} alt="" /></a></li>
                   </>)}
                   
                
               
            </ul>
             <ul className={s.other__sponsors}>
                {data.slice(0, 3).map((item, index) => (
                    <li key={index}><a href={item.website_link} target='_blank'><img src={item.image} alt="" /></a></li>
                ))}
                </ul>
        </section>
    )
}