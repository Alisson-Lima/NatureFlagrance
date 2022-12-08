import ButtonLink from "../ButtonLink"
export default function Header(){
    return(
        <header className="Header">
            <div className="premium"><p>Premium product</p></div>
            <div className="container flex">
                <a href="#">
                    <svg width="45" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7413 44.9743C9.29275 45.0346 8.02058 43.9921 7.87602 42.5251C6.81604 31.77 11.4824 14.3644 36.9977 13.302C38.4463 13.2416 39.7184 14.2842 39.8631 15.7512C40.923 26.5063 36.2566 43.912 10.7413 44.9743Z" fill="url(#paint0_linear_53_38)"/>
                        <path d="M12.8516 43.9574C11.7164 45.3465 9.63323 45.3519 8.51668 43.9473C1.61986 35.2711 -6.60503 18.9799 8.57079 0.996148C9.58659 -0.207577 11.3595 -0.351902 12.4948 0.735776C20.1544 8.07388 28.9947 24.2035 12.8516 43.9574Z" fill="#EEEBF2" fill-opacity="0.8"/>
                        <defs><linearGradient id="paint0_linear_53_38" x1="38.4835" y1="-0.0689293" x2="-3.34299" y2="37.5258" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6312CA"/><stop offset="1" stop-color="#5007AD"/></linearGradient></defs>
                    </svg>
                </a>
                <div className="menu flex">
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ButtonLink content="Buy now" name="button primary"/>
                </div>
            </div>
        </header>
    )
}