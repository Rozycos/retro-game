import Character from "@/components/common/Character";
import styles from "../../../styles/elements/AboutMe.module.scss";

export default function Hero() {
    return (
        <div className={styles.container}>
            <header></header>
            <main className="hero__main">
                <section>
                    <h1>
                        <p className="dual-color-text hero__text hero__text--shadow">I'm Przemek Malec</p>
                    </h1> 
                </section>
                <section className="hero__section--information">
                    <div className="hero__wrapper">
                        <div className="hero_image">obrazek</div>
                        <div className="hero__information">text</div>
                    </div>
                </section>
                {/* <Character character="scientist"/>
                <Character character="astronaut"/> */}
            </main>
            <footer className="footer"></footer>
        </div>
    );
} 

//<h1></h1> zrobić jako heading h2 jako subheading