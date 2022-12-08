export default function ButtonLink({link = "#", name = "", content ="Lorem Ipsum"}){
    return(
        <a href={link} className={name}>{content}</a>
    )
}