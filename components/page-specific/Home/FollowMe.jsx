"use client"
import GitHubIcon from "@/components/common/SvgIcons/GitHubIcon"
import LinkedInIcon from "@/components/common/SvgIcons/LinkedInIcon"
import XIcon from "@/components/common/SvgIcons/XIcon"

export default function FollowMe () {

    return(
        <>
            <h2 className='main__subheading'>follow me at</h2>
            <ul className='main__social-list'>
                <li className='main__social-item'>
                    <a href='https://www.google.com/' className='main__social-link'>
                        <div className='main__social-icon'>
                            <XIcon/>
                        </div>
                    </a>
                </li>
                <li className='main__social-item'>
                    <a href='https://www.google.com/' className='main__social-link'>
                        <div className='main__social-icon'>
                            <GitHubIcon/>
                        </div>
                    </a>
                </li>
                <li className='main__social-item'>
                    <a href='https://www.google.com/' className='main__social-link'>
                        <div className='main__social-icon'>
                            <LinkedInIcon/>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    )
}