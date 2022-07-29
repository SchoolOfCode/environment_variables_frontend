import NavButton from './NavButton/NavButton.jsx'

const LandingBanner = () => {

  return ( 
    <div id="home" className='bg-hero-background min-h-screen hero-image bg-right-bottom bg-cover flex mt-[4rem]'>

    <div class="relative container mx-auto p-4 flex items-center justify-center z-10 h-48 w-2/4 mt-[10rem]" >
      <div > 
        <div class="flex flex-col justify-center items-center lg:items-start text-center">
          <h1 class="text-6xl font-semibold text-gray-900 leading-none align-center">Project Clean-Up</h1>
          <div class="flex flex-row items-center justify-between space-x-8 md:ml-24">
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
