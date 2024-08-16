import s from './style.module.css'

export default function Speakers() {

    const speakers = [
        {
            avatar: ''
        }
    ]


    return(
        <section className={`${s.speakers} container`}>
            <h2 className='section__title'>
            Spikerlər
            </h2>
        </section>
    )
}