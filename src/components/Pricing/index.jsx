import ButtonLink from "../ButtonLink/"
import { useState, useEffect } from "react"
import pricingImage from "../../../assets/imgs/bg-pricing.jpg"
import api from "../../services/api"
export default function Pricing(){

    const[productPrice, setProductPrice] = useState(0)
    useEffect(()=>{
        api.get("/Product")
        .then((res)=>{
            setProductPrice(res.data.price)
        }).catch((e)=>{
            console.log(e)
        })
    }, [])
    return (
        <div className="container flex" id="Pricing">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="pricing-bg">
                <img src={pricingImage} alt="bg pricing effect" className="no-mobile" />
            </div>
            <div className="pricing-container">
                <div className="pricing-content">
                    <div className="logo-pricing flex">
                        <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7413 44.9743C9.29275 45.0346 8.02058 43.9921 7.87602 42.5251C6.81604 31.77 11.4824 14.3644 36.9977 13.302C38.4463 13.2416 39.7184 14.2842 39.8631 15.7512C40.923 26.5063 36.2566 43.912 10.7413 44.9743Z" fill="url(#paint0_linear_53_38)"/>
                            <path d="M12.8516 43.9574C11.7164 45.3465 9.63323 45.3519 8.51668 43.9473C1.61986 35.2711 -6.60503 18.9799 8.57079 0.996148C9.58659 -0.207577 11.3595 -0.351902 12.4948 0.735776C20.1544 8.07388 28.9947 24.2035 12.8516 43.9574Z" fill="#EEEBF2" fillOpacity="0.8"/>
                            <defs>
                            <linearGradient id="paint0_linear_53_38" x1="38.4835" y1="-0.0689293" x2="-3.34299" y2="37.5258" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6312CA"/>
                            <stop offset="1" stopColor="#5007AD"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <h1>R$:{productPrice.toLocaleString('pt-BR')}</h1>
                    <p>ou em 12x de R$: {((productPrice / 12) * 1.1).toFixed(2).replace(".", ",")}</p>
                    <hr />
                    <ul>
                        <li className="flex"><div className="icon-list"></div> lorem ipsum dolor sit amet</li>
                        <li className="flex"><div className="icon-list"></div> lorem ipsum dolor sit amet</li>
                        <li className="flex"><div className="icon-list"></div> lorem ipsum dolor sit amet</li>
                    </ul>
                    <ButtonLink name="button primary" content="Buy now" />
                    <p className="small">Compra segura</p>
                </div>
            </div>
        </div>
    )
}