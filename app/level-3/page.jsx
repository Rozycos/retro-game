//"use client"
//import React, { useState } from 'react';
import Button from "@/components/common/Button"
import LevelLoader from "@/components/common/LevelLoader"
import Link from "next/link"

export default function Level3 () {
    //const [showDone, setShowDone] = useState(false);

    return(            
        <>
            <LevelLoader link='/level-2' linkName='level 2' level='level 3' levelName='my experience' destinationPage = '/level-3/my-experience'/>
        </>
    )
}