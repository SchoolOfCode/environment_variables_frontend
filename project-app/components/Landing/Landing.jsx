import NavButton from './NavButton/NavButton.jsx'

const LandingBanner = () => {

  return ( 
    <div className='bg-hero-background bg-contain bg-no-repeat .flex flex-col '>

      <div className='grid h-screen place-items-center'>
      <h1 className = 'text-3xl'>Project Clean-Up</h1>
      </div>

      <div className='md:w-80 md:space-x-5 p-3 inset-9 md:-mt-96'>
        <NavButton buttonText="Button One"/> 
        <NavButton buttonText="Button Two"/>
      </div>
    </div> 
    );

}
 
export default LandingBanner;
