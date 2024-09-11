import Character from "@/components/common/Character";
import styles from "../../../styles/elements/AboutMe.module.scss";

export default function Hero() {
    return (
        <div className={styles.container}>
            <header></header>
            <main>
                <h2>Hero!!!</h2>
                <Character character="scientist"/>
                <Character character="astronaut"/>
            </main>
            <footer className="footer"></footer>
        </div>
    );
} 