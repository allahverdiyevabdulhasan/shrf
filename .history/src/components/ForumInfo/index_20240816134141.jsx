import s from './style.module.css'

export default function ForumInfo() {
    return (
        <section className={s.forum__info} id='forum'>
            <article className='container'>
                <div className={s.left__content}>
                    <img src="./public/assets/img/forumInfo1.webp" alt="" className={s.main__img} />
                    <img src="./public/assets/img/forumInfo2.webp" alt="" className={s.other_img} />
                    <img src="./public/assets/img/forumInfo3.webp" alt="" className={s.other_img} />
                </div>
                <div className="right__content">
                    <h2 className='section__title'>Forum Haqqında</h2>
                    <h3 className='sub__title'>SAT Group tərəfindən ölkəmizdə ikinci dəfə keçirilən HR Forumudur.</h3>
                    <p>
                    Forumda 3 panel üzrə 10 nəfər spiker fikirlərini iştirakçılarla bölüşəcək. <br />
                    Forumun 7 oktyabr 2023-cü il tarixində keçirilməsi planlaşdırılıb. Forumda 250 nəfər HR mütəxəssislər, sahibkar, şirkət rəhbərləri və top menecerin iştirakı nəzərdə tutulub.
                    <br /><br />
                    Forumun 1 gün ərzində 09:00-da başlayıb 17:00-dək davam etməsi nəzərdə tutulub.

                    </p>
                </div>
            </article>
        </section>
    )
}