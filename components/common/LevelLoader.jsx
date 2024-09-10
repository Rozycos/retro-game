"use client"
import Link from "next/link";
import Button from "./Button";

export default function LevelLoader({link='/', linkName='home', level='level 1', levelName='level name', destinationPage = '/'}) {
    return (
        <>

                {/* <h1 className="level-loader__heading dual-color-text">{level}</h1>
                <h2 className="level-loader__subheading">{levelName}</h2> */}
                {/* <Button text='start' secondary='true'/> */}
                <main className="level-loader level-loader__container">
                {/* <nav>Nawigation</nav> */}
                {/* <section className="level-loader"> */}
                <section className="level-loader__navigation">
                    <ul>
                        <li className="level-loader__list">
                            {/* <div className="level-loader__list-style"></div> */}
                            <Link href={link} className="level-loader__list-style dual-color-text__secondary">{linkName}</Link>
                        </li>
                    </ul>
                </section>
                <section className="level-loader__section">      
                    {/* <LevelLoader level='level 1' levelName='about me'/> */}
                    <h1 className="level-loader__heading dual-color-text">{level}</h1>
                    <h2 className="level-loader__subheading">{levelName}</h2>
                    <Button text='start' secondary={false} destinationPage ={destinationPage}/>
                </section>
                <section></section>
            </main>
        </>
    )
}

//usage <Button text='start'/>