import ButtonLink from "../ButtonLink/"
import { useState } from "react"
import Header from "../Header/"
export default function Hero(){

    const [modalClass, setModalClass] = useState("modal-video-disable")
    function showModal(){
        if(modalClass == "modal-video-disable"){
            setModalClass("modal-video-active")
            console.log(modalClass)
        }else{
            setModalClass("modal-video-disable")
            console.log(modalClass)
        }
    }

    return(
        <>
        <div className="back">
            <Header/>
            <div className="container">
                <div className="text-content center">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus, vitae molestie ligula porta. Morbi imperdiet nunc ullamcorper lectus cursus.</p>
                    <ButtonLink content="Buy now" name="button primary" />
                    <ButtonLink content="See more" name="button secondary" />
                </div>
                <div className="mockup-video" onClick={showModal}>
                    <div className="actions flex">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="video-action"></div>
                </div>
                <div className={`modal-video ${modalClass} flex`}>
                    <div className="close" ></div>
                    <div className="video">
                        <header className="flex">
                            <div className="circle flex" onClick={showModal}><div className="close">&times;</div></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </header>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}