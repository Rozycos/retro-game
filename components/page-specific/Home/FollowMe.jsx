"use client"
import GitHubIcon from "@/components/common/SvgIcons/GitHubIcon"
import LinkedInIcon from "@/components/common/SvgIcons/LinkedInIcon"
import XIcon from "@/components/common/SvgIcons/XIcon"

export default function FollowMe () {

    return(
        <>
            <h2 className='footer__subheading'>follow me at</h2>
            <ul className='footer__social-list'>
                <li className='footer__social-item'>
                    <a href='https://www.google.com/' className='footer__social-link'>
                        <div className='footer__social-icon'>
                            <GitHubIcon/>
                        </div>
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a href='https://www.google.com/' className='footer__social-link'>
                        <div className='footer__social-icon'>
                            <LinkedInIcon/>
                        </div>
                    </a>
                </li>
                <li className='footer__social-item'>
                    <a href='https://www.google.com/' className='footer__social-link'>
                        <div className='footer__social-icon'>
                            <XIcon/>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    )
}