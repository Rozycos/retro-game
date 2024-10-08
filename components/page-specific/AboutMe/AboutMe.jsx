"use client"
//import React, { useState } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"
import Link from "next/link"

export default function AboutMe () {
    //const [showDone, setShowDone] = useState(false);

    return(            
        <>
            <LevelLoader link='/' linkName='home' level='level 1' levelName='about me' destinationPage = '/level-1/hero'/>
        </>
    )
}


//<main className="level-loader level-loader__container">
//{/* <nav>Nawigation</nav> */}
//{/* <section className="level-loader"> */}
//<section className="level-loader__navigation">
//    <ul>
//        <li className="level-loader__list">
//            {/* <div className="level-loader__list-style"></div> */}
//            <Link href={'/'} className="level-loader__list-style dual-color-text__secondary">home</Link>
//        </li>
//    </ul>
//</section>
//<section className="level-loader__section">      
//    {/* <LevelLoader level='level 1' levelName='about me'/> */}
//    <h1 className="level-loader__heading dual-color-text">{level}</h1>
//    <h2 className="level-loader__subheading">{levelName}</h2>
//    <Button text='start' secondary={false} destinationPage ='/about-me/hero'/>
//</section>
//<section></section>
//</main>