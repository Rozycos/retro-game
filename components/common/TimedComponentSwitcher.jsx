"use client"
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TimedComponentSwitcher({ 
    switchTime = 1500,
    FirstComponent,
    SecondComponent,
    firstComponentProps = {}, 
    secondComponentProps = {}
}) {
    const [showFirstComponent, setShowFirstComponent] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFirstComponent(false);
      }, switchTime);
  
      return () => clearTimeout(timer);
    }, [switchTime]);
  
    return (
        <div>
            {showFirstComponent ? 
                <FirstComponent {...firstComponentProps} /> : 
                <SecondComponent {...secondComponentProps} />}
        </div>
    );
  }

// Walidacja typów właściwości
TimedComponentSwitcher.propTypes = {
  switchTime: PropTypes.number.isRequired, // Czas przełączenia w ms
  FirstComponent: PropTypes.elementType.isRequired, // Komponent do renderowania
  SecondComponent: PropTypes.elementType.isRequired, // Drugi komponent do renderowania
  firstComponentProps: PropTypes.object, // Propsy dla pierwszego komponentu
  secondComponentProps: PropTypes.object, // Propsy dla drugiego komponentu
};

//    how to use: <TimedComponentSwitcher 
//         switchTime={1500}
//         FirstComponent={Comp1} 
//         SecondComponent={Comp2} 
//         firstComponentProps={{dots:6, time:200, initialText:'Loading', finalText:'Done'}} 
//         secondComponentProps={comp2Props} 
//       />
//       Remember to import Components in parent component: import Comp1 from "../Comp1"