import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Button({ text = 'start', secondary = false, destinatioPage = '/'}) {
    const buttonClassName = `btn ${secondary ? 'btn--secondary' : ''}`;
    
    return (
        // <button className={buttonClassName} onClick={onClick}>
        <Link href={destinatioPage}>    
            <button className={buttonClassName} >
                <div className="wrapper dual-color-text">
                    {text}
                </div>
            </button>
        </Link>    
    );
}

Button.propTypes = {
    text: PropTypes.string,
    secondary: PropTypes.bool,
    destinatioPage: PropTypes.string,
    onClick: PropTypes.func,
};

//usage <Button text='start' secondary='true/false' destinationPage='/'/>