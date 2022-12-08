import ButtonLink from "../ButtonLink/"

export default function Hero(){
    return(
        <>
            <header></header>
            <div className="text-content center">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus, vitae molestie ligula porta. Morbi imperdiet nunc ullamcorper lectus cursus.</p>
                <ButtonLink content="Buy now" name="button primary" />
                <ButtonLink content="See more" name="button secondary" />
            </div>
        </>
    )
}