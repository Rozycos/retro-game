import Button from "./Button";

export default function LevelLoader({level='level 1', h1='level name'}) {
    return (
        <>
            <div className="level-loader__title dual-color-text">{level}</div>
            <h1>{h1}</h1>
            {/* <Button text='start' secondary='true'/> */}
        </>
    )
}

//usage <Button text='start'/>