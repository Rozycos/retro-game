import TypingText from "@/components/common/TypingText";

export default function Hero () {
    const HeroSectionText = `I am a third year undergrad student studying in SOME Institute of Technology, SOMEWHERE. I am from the City of Joy, CITYNAME. I completed my +2 from SOME SCHOOL.`
    return(            
        <>
            <div className="hero__wrapper">
                <div className="hero__pic">
                    
                </div>
                <div className="hero__description">
                    <TypingText text={HeroSectionText} typingSpeed={20}/>
                </div>
            </div>
        </>
    )
}