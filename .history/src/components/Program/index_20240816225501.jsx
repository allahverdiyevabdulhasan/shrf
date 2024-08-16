import s from './style.module.css';


export default function Program() {

    return(
        <section className={`${s.program} container`}>
            <h2 className='section__title'>
            Proqram
            </h2>

            <div className={s.program__road}>
                <div className={s.date}>
                    <p>
                    <svg width={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#ffffff"></rect> </g></svg> 
                         7 oktyabr</p>
                        <img src="./public/assets/img/program.webp" alt="" />
                </div>
            </div>
        </section>
    )
}