export default function Testimonial({testimonialName, testimonialText, testimonialId}){
    return(
        <>
            <div className={`testimonial testi-${testimonialId}`}>
                <h4>{testimonialName}</h4>
                <p>{testimonialText}</p>
            </div>
        </>
    )
}