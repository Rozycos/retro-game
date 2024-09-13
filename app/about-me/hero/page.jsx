import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";
import TypingText from "@/components/common/TypingText";
import AstronautImageLink from "@/components/page-specific/AboutMe/AstronautImageLink";

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
                    <div className="page__wrapper">
                        <div className="page_image">obrazek</div>
                        <div className="page__information">
                            <TypingText text={HeroSectionText} typingSpeed={20}/>
                        </div>
                        <AstronautImageLink/>
                    </div>
                </section>
                {/* <Character character="scientist"/> */}


            </main>
            <footer className="footer">
            
            </footer>
        </div>
    );
} 

//<h1></h1> zrobić jako heading h2 jako subheading