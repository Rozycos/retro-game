"use client"
import Button from '@/components/common/Button';
import styles from '../../../styles/elements/Home.module.scss';
import Character from '@/components/common/Character/Character';
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
            <Button text='start' secondary='true' destinationPage = '/level-1'/>
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