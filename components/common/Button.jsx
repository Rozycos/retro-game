"use client"
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Button({ text = 'start', secondary = false, destinationPage = '/'}) {
    const buttonClassName = `btn ${secondary ? 'btn--secondary' : ''}`;
    const router = useRouter();
    
    return (
        <button className={buttonClassName} onClick={() => router.push(destinationPage)}>
                <div className="wrapper dual-color-text">
                    {text}
                </div>
        </button>
        
    );
}

Button.propTypes = {
    text: PropTypes.string,
    secondary: PropTypes.bool,
    destinatioPage: PropTypes.string,
    //onClick: PropTypes.func,
};

//usage <Button text='start' secondary='true/false' destinationPage='/'/>