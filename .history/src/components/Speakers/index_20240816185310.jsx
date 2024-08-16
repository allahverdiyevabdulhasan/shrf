import s from './style.module.css'

export default function Speakers() {

    const speakers = {
        strategicHr: [
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Dəyanət Ağayev',
                workplace: 'Paprec, HR director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: '',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
        ],
        ceoHr: [
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Dəyanət Ağayev',
                workplace: 'Paprec, HR director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: '',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
        ],
        performance: [
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Dəyanət Ağayev',
                workplace: 'Paprec, HR director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: '',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc: [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/',
                        socName: 'LinkedIn'
                    },
                    {
                        instagramm: '',
                        socName: 'Instagram'
                    },
                    {
                        facebook: '',
                        socName: 'Facebook'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc: [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
        ]
    }


    return (
        <section className={`${s.speakers} container`}>
            <h2 className='section__title'>
                Spikerlər
            </h2>

            <h3 className='sub__title'>
                Strateji HR trendləri
            </h3>

            <div className={s.speaker__items}>
                {
                    speakers.strategicHr.map(speaker => {
                        return <div className={s.speaker__item}>
                            <img src={speaker.avatar} alt="" />
                            <h5>{speaker.name}</h5>
                            <h6>{speaker.workplace}</h6>
                            {speaker.position && <p>{speaker.position}</p>}
                            <div className={s.soc__icons}>
                                <button className={s.soc__icon}>
                                    <a href="#" className={s.soc__link}></a>
                                    <span className={s.svgContainer}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                                                fill="#ffffff"
                                            />
                                        </svg>
                                    </span>
                                    <span className={s.BG}></span>
                                </button>

                                <button className={s.soc__icon}>
                                    <a href="#" className={s.soc__link}></a>
                                    <span className={s.svgContainer}>
                                        <svg
                                            viewBox="0 0 24 24"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                                                fill="#ffffff"
                                            />
                                        </svg>
                                    </span>
                                    <span className={s.BG}></span>
                                </button>
                            </div>

                            {

                                // speaker.soc.map(soc => {
                                //     if(soc.socName == 'Facebook') {
                                //         return 
                                //     }
                                // })
                            }
                        </div>
                    })
                }
            </div>
        </section>
    )
}