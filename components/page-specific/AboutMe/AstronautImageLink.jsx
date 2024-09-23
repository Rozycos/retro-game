"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Character from '@/components/common/Character';

export default function AstronautImageLink (){
  const router = useRouter();

  const handleClick = () => {
    router.push('/experience');
  };

  return (
    <div className="image-link" onClick={handleClick}>
      <div className="image-link__bubble">
        <span className="image-link__bubble-text">click me to enter next level</span>
      </div>
      <Character character="astronaut"/>
    </div>
  );
};
