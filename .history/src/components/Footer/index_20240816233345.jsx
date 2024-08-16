import s from './style.module.css';


export default function Footer(){
    return(
        <footer>
            <div className={s.footer__logo}>
                <a href=""><img src="./public/assets/img/footerLogo.webp" alt="" /></a>
            </div>
        </footer>
    )
}