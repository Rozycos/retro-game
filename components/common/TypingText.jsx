"use client"
import { useState, useEffect } from "react";
//import { heroSectionText } from "./textData"; // Zakładam, że używasz camelCase

export default function TypingText ({ text = 'Hello, world!', typingSpeed = 150 }) {
    const [currentText, setCurrentText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      if (charIndex < text.length) {
        const timer = setTimeout(() => {
          setCurrentText((prev) => prev + text.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
  
        return () => clearTimeout(timer);
      }
    }, [charIndex, text, typingSpeed]);
  
    return <p>{currentText}</p>;
  };
  //export default TypingText;

//{ text = "This is a typing effect!", duration = 5000 }