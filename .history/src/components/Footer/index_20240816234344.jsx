import s from './style.module.css';


export default function Footer(){
    return(
        <footer>
            <div className={s.footer__logo}>
                <a href=""><img src="./public/assets/img/footerLogo.webp" alt="" /></a>
            </div>

            <p>
            Forumun məqsədi bizneslərimizdə Strateji HR funksiyasının effektivliyinin artırılması, HR-a strateji yanaşmanın təşviq edilməsi, ümumilikdə strateji idarəetmənin tətbiqinə təkan verməkdir.
            </p>


            <div className={s.socialLoginIcons}>
  <div className={s.socialcontainer}>
    <div className={`${s.icon} ${s.socialIcon11}`}>
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        className={s.svgIcontwit}
        fill="white"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    </div>
    <div className={s.socialIcon1}>
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        className={s.svgIcontwit}
        fill="white"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    </div>
  </div>
  <div className={s.socialcontainer}>
    <div className={`${s.icon} ${s.socialIcon22}`}>
      <svg
        fill="white"
        className={s.svgIcon}
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </div>
    <div className={s.socialIcon2}>
      <svg
        fill="white"
        className={s.svgIcon}
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    </div>
  </div>
  <div className={s.socialcontainer}>
    <div className={`${s.icon} ${s.socialIcon33}`}>
      <svg
        fill="white"
        className={s.svgIcon}
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100.28 448H7.4V149.81h92.88zm-46.14-340.4A53.7 53.7 0 0 1 0 53.34 53.3 53.3 0 0 1 53.57 0a53.3 53.3 0 0 1 53.57 53.34 53.7 53.7 0 0 1-53.57 53.45zM447.9 448h-92.88V302.4c0-34.7-12.44-58.4-43.53-58.4-23.72 0-37.84 15.96-44.08 31.34-2.28 5.56-2.84 13.32-2.84 21.08V448h-92.88s1.24-256 0-282.2h92.88v40c-.2.32-.5.76-.7 1.08h.7v-1.08c12.36-19.08 34.44-46.4 83.88-46.4 61.16 0 107.06 39.84 107.06 125.4V448z" />
      </svg>
    </div>
    <div className={s.socialIcon3}>
      <svg
        fill="white"
        className={s.svgIcon}
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100.28 448H7.4V149.81h92.88zm-46.14-340.4A53.7 53.7 0 0 1 0 53.34 53.3 53.3 0 0 1 53.57 0a53.3 53.3 0 0 1 53.57 53.34 53.7 53.7 0 0 1-53.57 53.45zM447.9 448h-92.88V302.4c0-34.7-12.44-58.4-43.53-58.4-23.72 0-37.84 15.96-44.08 31.34-2.28 5.56-2.84 13.32-2.84 21.08V448h-92.88s1.24-256 0-282.2h92.88v40c-.2.32-.5.76-.7 1.08h.7v-1.08c12.36-19.08 34.44-46.4 83.88-46.4 61.16 0 107.06 39.84 107.06 125.4V448z" />
      </svg>
    </div>
  </div>
</div>;

        </footer>
    )
}