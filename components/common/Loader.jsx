"use client"
import { useState, useEffect } from "react";

export default function Loader({dots, time, initialText, finalText}) {
    const [dotCount, setDotCount] = useState(0);
    const [loadingText, setLoadingText] = useState(initialText);

    useEffect(() => {
        const interval = setInterval(() => {
            if (dotCount < dots) {
                setDotCount(prevCount => prevCount + 1);
                setLoadingText(prevText => prevText + '.');
            } else {
                setLoadingText(finalText);
                clearInterval(interval);
            }
        }, time);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [dotCount]);

    return (
        <div className="container loader">
		    <div className="loader__message">{loadingText}</div>
	    </div>
    );
}

// How to use: <Loader dots='6' time='250' initialText='Loading' finalText='Done'/>