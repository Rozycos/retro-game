import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";
import TypingText from "@/components/common/TypingText";
import AstronautImageLink from "@/components/page-specific/AboutMe/AstronautImageLink";
import Image from "next/image";
import Hero from "@/components/page-specific/AboutMe/Hero";

export default function HeroPage() {
    

    return (
        <div className={styles.container}>
            <header></header>
            <main className="container page__main">
                <section>
                    <Heading text="I'm Przemek Malec"/>
                </section>
                {/* <section className="page__section--main"> */}
                <section>
                    <Hero/>
                </section>
                {/* <Character character="scientist"/> */}


            </main>
            <footer className="footer">
            {/* <AstronautImageLink/> */}
            </footer>
        </div>
    );
} 

//<h1></h1> zrobić jako heading h2 jako subheading
                    // <div className="container page__wrapper">
                    //     <div className="page__image">
                    //             <div className="page__hero"></div>
                    //             {/* <Image width={200} height={200} alt="hero image" src="/images/hero.png"/> */}
                            
                    //             </div>
                    //             <div className="page__information">
                    //                 <TypingText text={HeroSectionText} typingSpeed={20}/>
                    //             </div>
                                
                    //         </div>
                    //         <AstronautImageLink/>