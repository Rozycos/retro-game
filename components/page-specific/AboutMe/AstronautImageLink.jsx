"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Character from '@/components/common/Character';

export default function AstronautImageLink (){
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="image-link" onClick={handleClick}>
      <div className="image-link__bubble">
        click me to enter next level
      </div>
      <Character character="astronaut"/>
    </div>
  );
};
