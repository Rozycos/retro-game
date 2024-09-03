"use client"
import React, { useState, useEffect } from 'react';

export default function TimedComponentSwitcher({ 
    ThisComponentTime,
    FirstComponent,
    SecondComponent,
    firstComponentProps, 
    secondComponentProps
}) {
    const [showFirstComponent, setShowFirstComponent] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowFirstComponent(false);
      }, ThisComponentTime);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
        <div>
            {showFirstComponent ? 
                <FirstComponent {...firstComponentProps} /> : 
                <SecondComponent {...secondComponentProps} />}
        </div>
    );
  }

//    how to use: <TimedComponentSwitcher 
//         ThisComponentTime={1500}
//         FirstComponent={Comp1} 
//         SecondComponent={Comp2} 
//         firstComponentProps={{dots:6, time:200, initialText:'Loading', finalText:'Done'}} 
//         secondComponentProps={comp2Props} 
//       />
//       Remember to import Components in parent component: import Comp1 from "../Comp1"