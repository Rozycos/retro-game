"use client"
//import React, { useState } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"
import Link from "next/link"

export default function AboutMe () {
    //const [showDone, setShowDone] = useState(false);

    return(            
        <>
            <LevelLoader link='/about-me' linkName='level 1' level='level 2' levelName='explore my skills' destinationPage = '/experience/my-skills'/>
        </>
    )
}