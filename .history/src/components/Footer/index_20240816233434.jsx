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
        </footer>
    )
}