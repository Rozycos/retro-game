"use client"
import GitHubIcon from "@/components/common/SvgIcons/GitHubIcon"
import LinkedInIcon from "@/components/common/SvgIcons/LinkedInIcon"
import XIcon from "@/components/common/SvgIcons/XIcon"

export default function FollowMe () {

    return(
        <>
            <h2>follow me at</h2>
            <ul className='social--list'>
                <li>
                    <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
                        <div className='social--icon'>
                            <GitHubIcon/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
                        <div className='social--icon'>
                            <LinkedInIcon/>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://x.com/' target='_blank' rel='noopener noreferrer'>
                        <div className='social--icon'>
                            <XIcon/>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    )
}