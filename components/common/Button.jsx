export default function Button({text}) {
    return (
        <button className="section_8bit">
            <div className="wrapper dual-color-text">
                {text}
            </div>
        </button>
    )
}

//usage <Button text='start'/>