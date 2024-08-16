
import s from './../style.module.css'
export default function NavItems() {


    return (
        <>
            <div className={s.mob__logo}>
                <a href=""><img src="./public/assets/img/logo.webp" alt="" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="">Haqqımızda</a></li>
                    <li><a href="">Spikerlər</a></li>
                    <li><a href="">Sponsorlar</a></li>
                    <li><a href="">Qalereya</a></li>
                    <li><a href="">Proqram</a></li>
                    <li><a href="">Əlaqə</a></li>
                </ul>
            </nav>
            <button className='buy__button'>
                <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16H12.01M12 12H12.01M12 8H12.01M21 14V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V10C19.8954 10 19 10.8954 19 12C19 13.1046 19.8954 14 21 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Bilet al
            </button>
        </>
    )
}