import Button from '@/components/common/Button';
import styles from '../styles/elements/Home.module.scss';
import Character from '@/components/common/Character';
import Loader from '@/components/common/Loader';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>header</header>
      <main className='main'>
        <section>
          <h1>
            <p className='dual-color-text'>Welcome</p>
            <p className='dual-color-text'>player1</p>
          </h1>
          <h2>Press play to<br></br> Enter story mode</h2>
        </section>
        <section className='section__button'>
          <Button text='start' secondary='true' destinatioPage = '/about-me'/>
          <div>
            <Character character='arrow'/>
          </div>
        </section>
        <section>
          <h2>follow me at</h2>
          <ul className='section__follow-me'>
            <li>IKO</li>
            <li>IKO</li>
            <li>IKO</li>
          </ul>
        </section>
      </main>
      
      

      {/* <ul>
        <li><Link href="/about-me">About me</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Button text='start' secondary='true' destinatioPage = '/about-me'/>
      <Character character='ufo2'/>
      <Character character='ufo1'/>
      <Character character='ufo'/>
      <Character character='scientist'/>
      <Character character='astronaut'/>
      <Character character='alien1'/>
      <Character character='alien2'/>
      <Character character='alien3'/> */}

    </div>  
  );
}
