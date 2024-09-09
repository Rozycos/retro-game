import Button from '@/components/common/Button';
import styles from '../styles/elements/Home.module.scss';
import Character from '@/components/common/Character';
//import Loader from '@/components/common/Loader';
//import Link from 'next/link';
//import SocialButtons from '@/components/common/SocialButtons';
import FollowMe from '@/components/page-specific/Home/FollowMe';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className='homepage__header'></header>
      <main className='homepage__main'>
        <section className='container'> 
          <h1>
            <p className='dual-color-text homepage__text--shadow'>Welcome</p>
            <p className='dual-color-text'>player1</p>
          </h1>
          <h2>Press play to<br></br> Enter story mode</h2>
        </section>
        <section className='container homepage__section--button'>
          <Button text='start' secondary='true' destinatioPage = '/about-me'/>
          <div className='homepage__character homepage__character--display'>
            <Character character='arrow'/>
          </div>
        </section>
        <section className='container'>
          <FollowMe/>
        </section>
      </main>
      <footer className='homepage__footer'></footer>
    </div>  
  );
}
// to są propozycje nazwy klas
/* <div className={styles.container}>
  <header className='homepage__header'></header>
  <main className='homepage__main'>
    <section className='homepage__section homepage__section--welcome'> 
      <h1 className='homepage__heading'>
        <p className='homepage__text homepage__text--dual-color homepage__text--shadow'>Welcome</p>
        <p className='homepage__text homepage__text--dual-color homepage__text--shadow'>player1</p>
      </h1>
      <h2 className='homepage__subheading'>Press play to<br>Enter story mode</h2>
    </section>
    <section className='homepage__section homepage__section--button'>
      <Button text='start' secondary='true' destinationPage='/about-me'/>
      <div className='homepage__character homepage__character--display'>
        <Character character='arrow'/>
      </div>
    </section>
    <section className='homepage__section homepage__section--social'>
      <FollowMe/>
    </section>
  </main>
  <footer className='homepage__footer'></footer>
</div>
 */
