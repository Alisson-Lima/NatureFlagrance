import { useEffect } from "react"
export default function FAQ(){
    
    useEffect(()=>{
        document.querySelectorAll(".question-faq .res").forEach(item =>{
            item.style.maxHeight = 0
        })
    }, [])

    function showAnswer(e){
        let answer = e.target.childNodes[1]
        if(answer == undefined){
            return
        }
        answer.classList.toggle("active")
        if(answer.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px"
        }else{
            answer.style.maxHeight = 0
        }

    }

    return (
        <>
            <div id="Faq">
                <div className="container flex">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                    <p className="p-faq">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla velit ut tellus faucibus.</p>

                    <div className="questions-container">
                        <div className="question-faq" onClick={showAnswer}>
                            <div className="ques flex">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <span className="icon">
                                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L16 16L30 2" stroke="url(#paint0_linear_10_597)" stroke-width="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_10_597" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6312CA"/>
                                        <stop offset="1" stopColor="#5007AD"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="res">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem sed adipisci accusantium, a optio esse libero ut reprehenderit expedita alias officia ad distinctio repudiandae omnis dignissimos corrupti quaerat aliquid.</p>
                            </div>
                        </div>
                        <div className="question-faq" onClick={showAnswer}>
                            <div className="ques flex">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <span className="icon">
                                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L16 16L30 2" stroke="url(#paint0_linear_10_597)" stroke-width="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_10_597" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6312CA"/>
                                        <stop offset="1" stopColor="#5007AD"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="res">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem sed adipisci accusantium, a optio esse libero ut reprehenderit expedita alias officia ad distinctio repudiandae omnis dignissimos corrupti quaerat aliquid.</p>
                            </div>
                        </div>
                        <div className="question-faq" onClick={showAnswer}>
                            <div className="ques flex">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <span className="icon">
                                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L16 16L30 2" stroke="url(#paint0_linear_10_597)" stroke-width="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_10_597" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6312CA"/>
                                        <stop offset="1" stopColor="#5007AD"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="res">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem sed adipisci accusantium, a optio esse libero ut reprehenderit expedita alias officia ad distinctio repudiandae omnis dignissimos corrupti quaerat aliquid.</p>
                            </div>
                        </div>
                        <div className="question-faq" onClick={showAnswer}>
                            <div className="ques flex">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <span className="icon">
                                    <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L16 16L30 2" stroke="url(#paint0_linear_10_597)" stroke-width="4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_10_597" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6312CA"/>
                                        <stop offset="1" stopColor="#5007AD"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                            <div className="res">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem sed adipisci accusantium, a optio esse libero ut reprehenderit expedita alias officia ad distinctio repudiandae omnis dignissimos corrupti quaerat aliquid.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}