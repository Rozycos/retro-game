"use client"
import styles from '../../styles/elements/Page.module.scss'

export default function PageLayout() {
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
    )
}