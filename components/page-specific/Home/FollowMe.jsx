"use client"
import GitHubIcon from "@/components/common/SvgIcons/GitHubIcon"
import LinkedInIcon from "@/components/common/SvgIcons/LinkedInIcon"
import XIcon from "@/components/common/SvgIcons/XIcon"

export default function FollowMe () {

    return(
        <>
            <h2>follow me at</h2>
            <ul className='homepage__social-list'>
                <li>
                    <a href='https://www.google.com/'>
                        <div className='homepage__social-icon'>
                            <GitHubIcon/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.google.com/'>
                        <div className='homepage__social-icon'>
                            <LinkedInIcon/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.google.com/'>
                        <div className='homepage__social-icon'>
                            <XIcon/>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    )
}