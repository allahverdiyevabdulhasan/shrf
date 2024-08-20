import s from './style.module.css';

export default function Sponsor() {
    return(
        <section className={`${s.sponsor__section} container`}>
            <h2 className='section__title'>
            Sponsorlar
            </h2>
            <ul className={s.main__sponsors}>
                <li><a href=""><img src="/src/assets/img/sponsor1.webp" alt="" /></a></li>
                <li><a href=""><img src="/src/assets/img/sponsor2.webp" alt="" /></a></li>
            </ul>
            <ul className={s.other__sponsors}>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/img/sponsor3.webp" alt="" /></a></li>
            </ul>
        </section>
    )
}