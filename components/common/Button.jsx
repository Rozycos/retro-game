import PropTypes from 'prop-types';

export default function Button({ text = 'start', secondary = false, onClick}) {
    const buttonClassName = `btn ${secondary ? 'btn--secondary' : ''}`;
    
    return (
        <button className={buttonClassName} onClick={onClick}>
            <div className="wrapper dual-color-text">
                {text}
            </div>
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    secondary: PropTypes.bool
};

//usage <Button text='start' secondary='true/false'/>