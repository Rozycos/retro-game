import Button from "@/components/common/Button";
import TypingText from "@/components/common/TypingText";
import Link from "next/link";
//import Image from "next/image";

export default function Hero () {
    const HeroSectionText = `I am a third year undergrad student studying in SOME Institute of Technology, SOMEWHERE. I am from the City of Joy, CITYNAME. I completed my +2 from SOME SCHOOL.`
    // const imageStyle = {
    //     width: 100,
    //     height: 'auto',
    //     @media (max-width: 768px){
    //         width:150,
    //         height: 'auto'
    //     }
        
    //   }
    
    return(            
        <>
            <div className="hero__content">
                <div className="hero__image">
                    <div className="hero__image-main"></div>
                    {/* <Image 
                        fill
                        //style={styles}
                        src="/images/hero.png"
                        //width={150}
                        //height={150}
                        sizes="(max-width: 768px) 100px, 100px"
                        alt="Picture of the author"
                    /> */}
                </div>
                <div className="hero__description">
                    <TypingText text={HeroSectionText} typingSpeed={20}/>
                    <Button text='next level' secondary={false} destinationPage='/level-2'/> 
                    {/* <Link className="" href="/">next level</Link> */}
                    {/* <Button text='next level' secondary={false}destinationPage='/'/> */}
                </div>
            </div>
        </>
    )
}

//usage <Button text='start' secondary='true/false' destinationPage='/'/>