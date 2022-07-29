import NavButton from './NavButton/NavButton.jsx'

const LandingBanner = () => {

  return ( 
    <div id="home" className='bg-hero-background min-h-screen hero-image bg-right-bottom bg-cover flex'>

    <div class="relative container mx-auto p-4 flex items-center justify-center z-10">
      <div>
        <div class="flex flex-col justify-center items-center lg:items-start text-center">
          <h1 class="text-6xl font-semibold text-gray-900 leading-none align-center">Project Clean-Up</h1>
          <div class="flex flex-row items-center justify-between">
            <NavButton buttonText="Button One"/> 
            <NavButton buttonText="Button Two"/>
          </div>
        </div>
      </div>
    </div> 
  </div> 
    );

}
 
export default LandingBanner;
