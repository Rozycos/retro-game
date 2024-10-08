//"use client"
//import React, { useState } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"
import Link from "next/link"

export default function Level4 () {
    //const [showDone, setShowDone] = useState(false);

    return(            
        <>
            <LevelLoader link='/level-3' linkName='level 3' level='level 4' levelName='explore my projects' destinationPage = '/level-4/my-projects'/>
        </>
    )
}