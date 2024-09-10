import Button from "./Button";

export default function LevelLoader({level='level 1', h1='level name'}) {
    return (
        <>
            <h1 className="level-loader__title dual-color-text">{level}</h1>
            <h2>{h1}</h2>
            {/* <Button text='start' secondary='true'/> */}
        </>
    )
}

//usage <Button text='start'/>