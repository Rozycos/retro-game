import PropTypes from 'prop-types';

export default function Button({text='start'}) {
    return (
        <button className="section_8bit">
            <div className="wrapper dual-color-text">
                {text}
            </div>
        </button>
    )
}

// Walidacja typów właściwości
Button.propTypes = {
    text: PropTypes.string.isRequired,
};

//usage <Button text='start'/>