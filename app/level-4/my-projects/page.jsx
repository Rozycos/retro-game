import Character from "@/components/common/Character";
import styles from "../../../styles/elements/Page.module.scss";
import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function MyProjects() {
    return (
        <div className={styles.container}>
            <header></header>
            <main className="page__main">
                <section>
                    <Heading text='explore my projects'/>
                </section>
                <section className="page__section--information">
                    <div className="page__wrapper">
                        <div className="page_image">obrazek</div>
                        <div className="page__information">text</div>
                        <Button text='Contact' secondary='false' destinationPage='/'/>
                    </div>
                </section>
                {/* <Character character="scientist"/>
                <Character character="astronaut"/> */}
            </main>
            <footer className="footer"></footer>
        </div>
    );
} 

//usage <Button text='start' secondary='true/false' destinationPage='/'/>