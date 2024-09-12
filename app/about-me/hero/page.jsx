import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";

export default function Hero() {
    return (
        <div className={styles.container}>
            <header></header>
            <main className="page__main">
                <section>
                    <Heading text="I'm Przemek Malec"/>
                </section>
                <section className="page__section--information">
                    <div className="page__wrapper">
                        <div className="page_image">obrazek</div>
                        <div className="page__information">text</div>
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