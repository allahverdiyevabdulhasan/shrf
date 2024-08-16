import s from './style.module.css';


export default function Program() {

    return (
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

            <div className="contact__us">
                <div className={s.left__content}>
                    <h2 className='section__title'>
                        Əlaqə
                    </h2>
                    <p>
                        <a href="tel:+994554555645">
                            +994554555645
                        </a>
                    </p>

                    <p>
                    <svg width="18" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -259.000000)" fill="#ffffff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        <a href="mailto:"> 
                            info@satgroup.az
                        </a>
                    </p>
                    <p>
                        <a href="https://www.google.com/maps/place/Фэйрмонт+Баку/@40.3602613,49.8235942,17z/data=!3m1!4b1!4m9!3m8!1s0x403a7d8139ede473:0x2424959edacdfc05!5m2!4m1!1i2!8m2!3d40.3602613!4d49.8261691!16s%2Fm%2F0jvs758?entry=ttu">Fairmont Baku
                        </a>
                    </p>
                </div>

                <div className={s.right__content}>

                </div>
            </div>
        </section>
    )
}