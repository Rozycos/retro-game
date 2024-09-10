"use client"
//import React, { useState } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"
import Link from "next/link"

export default function AboutMe () {
    //const [showDone, setShowDone] = useState(false);

    return(
        // <>
        //     {!showDone ? (
        //     <main className="level-loader level-loader__container">
        //         {/* <nav>Nawigation</nav> */}
        //         {/* <section className="level-loader"> */}
        //             <LevelLoader level='level 1' h1='know about me'/>
        //             <Button text='start' secondary={false} destinatioPage ='/about-me/hero'/>
        //         {/* </section> */}
        //     </main>
        //     ) : (
        //         <div>HURRAAA!!</div>
        //     )}
        // </>

        <>
            <main className="level-loader level-loader__container">
                {/* <nav>Nawigation</nav> */}
                {/* <section className="level-loader"> */}
                <section>
                    <ul>
                        <li>
                            <div className="level-loader__list-style"></div>
                            <Link href={'/'}>home</Link>
                        </li>
                    </ul>
                </section>
                <section>      
                    <LevelLoader level='level 1' levelName='about me'/>
                    <Button text='start' secondary={false} destinationPage ='/about-me/hero'/>
                </section>
                <section></section>
            </main>
        </>
    )
}