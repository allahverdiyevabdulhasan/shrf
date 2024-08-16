import s from './style.module.css'

export default function Speakers() {

    const speakers = {
        strategicHr : [
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Dəyanət Ağayev',
                workplace: 'Paprec, HR director',
                position: 'Moderator',
                soc : [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc : [
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
        ] ,
        ceoHr : [
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Dəyanət Ağayev',
                workplace: 'Paprec, HR director',
                position: 'Moderator',
                soc : [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc : [
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
                soc : [
                    {
                        likedIn: ''
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: 'https://www.facebook.com/deyanet.agayev.3'
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Mahmut Temiz',
                workplace: 'CHRO – Polisan Holding',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/mahmut-temiz-1961861a/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Ceyhun Nağıyev',
                workplace: 'Azərbaycan Dəmir Yolları, CHRO',
                position: '',
                soc : [
                    {
                        likedIn: 'https://www.linkedin.com/in/jeyhun-naghiyev-emba-8b473934/'
                    },
                    {
                        instagramm: ''
                    },
                    {
                        facebook: ''
                    }
                ]
            },
            {
                avatar: './public/assets/img/speaker1.webp',
                name: 'Vahida Rzayeva',
                workplace: '“AzerGold” CJSC, HR Director',
                position: 'Moderator',
                soc : [
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


    return(
        <section className={`${s.speakers} container`}>
            <h2 className='section__title'>
            Spikerlər
            </h2>

            <h3 className='sub__title'>
            Strateji HR trendləri
            </h3>
        </section>
    )
}