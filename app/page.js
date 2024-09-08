import Button from '@/components/common/Button';
import styles from '../styles/elements/Home.module.scss';
import Character from '@/components/common/Character';
//import Loader from '@/components/common/Loader';
//import Link from 'next/link';
//import SocialButtons from '@/components/common/SocialButtons';
import FollowMe from '@/components/page-specific/Home/FollowMe';

//todo 1. zdefiniować pseudoelementy w h1

export default function Home() {
  return (
    <div className={styles.container}>
      <header className='header'>header</header>
      <main className='main'>
        <section className='container section__welcome'> 
          <h1 className='main__heading'>
            <p className='dual-color-text dual-color-text__shadow'>Welcome</p>
            <p className='dual-color-text dual-color-text--shadow'>player1</p>
          </h1>
          <h2 className='main__subheading'>Press play to<br></br> Enter story mode</h2>
        </section>
        <section className='container main__section main__section--button'>
          <Button text='start' secondary='true' destinatioPage = '/about-me'/>
          <div className='main__character main__character--display'>
            <Character character='arrow'/>
          </div>
        </section>

      </main>
      <footer className='footer'>
        <section className='container footer__section footer__section--social'>
          <FollowMe/>
        </section>
      </footer>
    </div>  
  );
}
// to są propozycje nazwy klas
/* <main className='main'>
  <section className='main__section main__section--welcome'> 
    <h1 className='main__heading'>
      <p className='main__text main__text--dual-color'>Welcome</p>
      <p className='main__text main__text--dual-color'>player1</p>
    </h1>
    <h2 className='main__subheading'>Press play to<br /> Enter story mode</h2>
  </section>
  <section className='main__section main__section--button'>
    <Button text='start' secondary='true' destinatioPage = '/about-me'/>
    <div className='main__character'>
      <Character character='arrow'/>
    </div>
  </section>
  <section className='main__section main__section--social'>
    <h2 className='main__subheading'>follow me at</h2>
    <ul className='main__social-list'>
      <li className='main__social-item'>
        <a href='https://www.google.com/' className='main__social-link'>
          <div className='main__social-icon' style={{ color: 'white' }}>
            <XIcon/>
          </div>
        </a>
      </li>
      <li className='main__social-item'>
        <a href='https://www.google.com/' className='main__social-link'>
          <div className='main__social-icon' style={{ color: 'red' }}>
            <GitHubIcon/>
          </div>
        </a>
      </li>
      <li className='main__social-item'>
        <a href='https://www.google.com/' className='main__social-link'>
          <div className='main__social-icon' style={{ color: 'red' }}>
            <LinkedInIcon/>
          </div>
        </a>
      </li>
    </ul>
  </section>
</main> */
