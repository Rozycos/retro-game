"use client"
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function LoadingScreen({dots=1, time=100, initialText='loading', finalText='done!'}) {
    const [dotCount, setDotCount] = useState(0);
    const [loadingText, setLoadingText] = useState(initialText);
    const [loadingDots, setLoadingDots] = useState('.')

    useEffect(() => {
        const interval = setInterval(() => {
            if (dotCount < dots) {
                setDotCount(prevCount => prevCount + 1);
                //setLoadingText(prevText => prevText + '.');
                setLoadingDots(prevDots => prevDots + '.');
            } else {
                setLoadingText(finalText);
                clearInterval(interval);
            }
        }, time);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [dotCount]);

    return (
        <main className="loader">
		    <div className="loader__message dual-color-text">{loadingText}</div>
            <div className="loader__message loader__message--dots">{loadingDots}</div>
	    </main>
    );
}

// Walidacja typów właściwości
LoadingScreen.propTypes = {
    dots: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    initialText: PropTypes.string.isRequired,
    finalText: PropTypes.string.isRequired,
};

// How to use: <Loader dots='6' time='250' initialText='Loading' finalText='Done'/>