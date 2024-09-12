import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";

export default function MySkills() {
    return (
        <div className={styles.container}>
            <header></header>
            <main className="page__main">
                <section>
                    <Heading text='Character Skills'/>
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
