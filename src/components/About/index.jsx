import imgSrc from "../../../assets/imgs/about.jpg"

export default function About(){
    return (
        <>
            <div className="container flex" id="About">
                <div className="about-img-company center">
                    <img src={imgSrc} alt="Company image"  />
                </div>
                <div className="about-text-content center">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti quo incidunt rem cumque reprehenderit vero a omnis in aliquam. Officiis sequi repellendus enim sit quae, harum dolor ipsa consequuntur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deleniti quo incidunt rem cumque reprehenderit vero a omnis in aliquam. Officiis sequi repellendus enim sit quae, harum dolor ipsa consequuntur!</p>
                    <div className="about-social-icons flex">
                        <a href="#" className="social"></a>
                        <a href="#" className="social"></a>
                        <a href="#" className="social"></a>
                    </div>
                </div>
            </div>
        </>
    )
}