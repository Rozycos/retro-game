"use client"
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"

export default function AboutMe () {
    return(
        <>
            <main className="level-loader level-loader__container">
                {/* <nav>Nawigation</nav> */}
                {/* <section className="level-loader"> */}
                    <LevelLoader level='level 10' h1='know about me'/>
                    <Button text='start' secondary={false}/>
                {/* </section> */}
            </main>
        </>
    )
}