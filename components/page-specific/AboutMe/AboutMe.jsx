"use client"
import React, { useState, useEffect } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"

export default function AboutMe () {
    const [showDone, setShowDone] = useState(false);

    const handleClick = () => {
      setShowDone(true);
    };
    return(
        <>
            {!showDone ? (
            <main className="level-loader level-loader__container">
                {/* <nav>Nawigation</nav> */}
                {/* <section className="level-loader"> */}
                    <LevelLoader level='level 1' h1='know about me'/>
                    <Button text='start' secondary={false} destinatioPage ='/about-me/hero'/>
                {/* </section> */}
            </main>
            ) : (
                <div>HURRAAA!!</div>
            )}
        </>
    )
}