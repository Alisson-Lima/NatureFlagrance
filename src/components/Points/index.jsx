import ButtonLink from "../ButtonLink"

export default function Points(){
    return(
        <>
            <section className="container points">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus, vitae molestie ligula porta. Morbi imperdiet nunc ullamcorper lectus cursus.</p>
                <div className="cards-points-container flex">
                    <div className="cards-points flex ">
                        <h1 className="purple number">1</h1>
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus</p>
                    </div>
                    <div className="cards-points flex">
                        <h1 className="purple number">2</h1>
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus</p>
                    </div>
                    <div className="cards-points flex">
                        <h1 className="purple number">3</h1>
                        <h3>Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus</p>
                    </div>
                </div>
                <ButtonLink content="Buy now" name="button primary"/>
            </section>
        </>
    )
}