import Image from 'next/image';
import heroBackground from '../../public/img/hero-background.png'

const LandingBanner = () => {
    return ( 
      <div className='.h-1 .max-w-xs'>
       <Image
        src={heroBackground}
        alt='hero-background'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        width={500}
        height={500}
        />
        </div>
     );
}
 
export default LandingBanner