export default function ButtonLink({link = "#Pricing", name = "", content ="Lorem Ipsum", arrow=false}){
    return(
        <a href={link} className={name}>{content} 
        {arrow? <svg className="arrow" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="#CCCDCE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> : null}
    </a>
    )
}