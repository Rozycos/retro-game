import Link from "next/link";
import Button from "./Button";

export default function LevelLoader({level='level 1', levelName='level name'}) {
    return (
        <>

                <h1 className="level-loader__heading dual-color-text">{level}</h1>
                <h2 className="level-loader__subheading">{levelName}</h2>
                {/* <Button text='start' secondary='true'/> */}
        </>
    )
}

//usage <Button text='start'/>