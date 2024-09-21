import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";
import TypingText from "@/components/common/TypingText";
import AstronautImageLink from "@/components/page-specific/AboutMe/AstronautImageLink";
import Image from "next/image";

export default function Hero() {
    const HeroSectionText = `I am a third year undergrad student studying in SOME Institute of Technology, SOMEWHERE. I am from the City of Joy, CITYNAME. I completed my +2 from SOME SCHOOL.`

    return (
        <div className={styles.container}>
            <header></header>
            <main className="container page__main">
                <section>
                    <Heading text="I'm Przemek Malec"/>
                </section>
                <section className="page__section--information">
                    <div className="container page__wrapper">
                        <div className="page__image">
                                <div className="page__hero"></div>
                                {/* <Image width={200} height={200} alt="hero image" src="/images/hero.png"/> */}
                            
                        </div>
                        <div className="page__information">
                            <TypingText text={HeroSectionText} typingSpeed={20}/>
                        </div>

                    </div>
                    {/* <AstronautImageLink/> */}
                </section>
                {/* <Character character="scientist"/> */}


            </main>
            <footer className="footer">
            
            </footer>
        </div>
    );
} 

//<h1></h1> zrobić jako heading h2 jako subheading