import Loader from '@/components/common/Loader';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Main Page</h1>
      <ul>
        <li><Link href="/about-me">About me</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Loader dots='6' time='250' initialText='Loading' finalText='Done'/>
    </>  
  );
}
