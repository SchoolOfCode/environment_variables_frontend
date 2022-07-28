import NavButton from './NavButton/NavButton.jsx'

const LandingBanner = () => {
  return ( 
    <div className='bg-hero-background bg-contain bg-no-repeat'>

      <div className='grid h-screen place-items-center'>
      <h1 className = 'text-3xl'>Project Clean-Up</h1>
      </div>

      <div className=''>
        <NavButton buttonText="Button One"/>
        <NavButton buttonText="Button Two"/>
      </div>
    </div> 
    );
}
 
export default LandingBanner;
