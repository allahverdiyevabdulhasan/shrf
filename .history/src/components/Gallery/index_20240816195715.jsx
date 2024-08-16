import s from './style.module.css'

export default function Gallery() {


    return(
        <section className={`${s.gallery}`}>
            <div className="container">
            <div className={s.left__content}>
                <h2 className='section__title'>
                Qalereya
                </h2>
            </div>

            <div className={s.right__content}>
                
            </div>
            </div>
        </section>
    )
}