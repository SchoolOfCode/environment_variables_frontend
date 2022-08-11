import React from "react";
import Image from "next/image";

const WeatherReqs = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#004F54] text-white font-bold uppercase text-[10px] md:text-xs py-0.5 px-2 sm:p1 sm:mt-0 rounded shadow hover:shadow-lg ease-linear transition-all duration-75"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Click me
      </button>

      {showModal ? (
        <>
          <div className=" z-[1005] sm:ml-0 mr-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-5/6 sm:w-auto sm:my-6 sm:mx-auto sm:max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-0 sm:p-2 border-b border-solid border-slate-200 rounded">
                  <h3 className=" mt-2 ml-6 text-lg sm:text-2xl font-bold text-[#004F54]">
                    Weather Tips
                  </h3>
                </div>
                {/*body*/}
                <div className="flex">
                  {/* hot icons div */}
                  <div className="relative p-2 sm:p-6 flex-auto">
                    {/* hot icons */}
                    <div className="flex p-2">
                      <div className="mr-2 sm:mr-10 bg-red-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/sunglasses.svg" width={75} height={75} />
                      </div>
                      <div className="bg-red-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/cap.svg" width={75} height={75} />
                      </div>
                    </div>
                    <div className="flex p-2">
                      <div className="mr-2 sm:mr-10 bg-red-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/water.svg" width={75} height={75} />
                      </div>
                      <div className="bg-red-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/sun-cream.svg" width={75} height={75} />
                      </div>
                    </div>
                  </div>

                  {/* cold icons div */}
                  <div className="relative p-2 sm:p-6 flex-auto sm:ml-8">
                    {/* cold icons */}
                    <div className="flex p-2">
                      <div className="mr-2 sm:mr-10 bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/jacket.svg" width={75} height={75} />
                      </div>
                      <div className="bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/gloves.svg" width={75} height={75} />
                      </div>
                    </div>
                    <div className="flex p-2">
                      <div className="mr-2 sm:mr-10 bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/boots.svg" width={75} height={75} />
                      </div>
                      <div className="flex flex-col items-center bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2 text-sm">
                        <Image src="/winter-hat.svg" width={75} height={75} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Checklist hot */}
                <div className="flex ">
                  <div>
                    <ul className=" mt-2 ml-6 text-[11px] sm:text-[12px] text-[#004F54]">
                      <h2 className="text-md sm:text-xl font-bold text-[#004F54]">
                        Hot Checklist
                      </h2>
                      <li>- Sunglasses</li>
                      <li>- Cap</li>
                      <li>- Sun Lotion</li>
                      <li>- Water (lots of it)</li>
                    </ul>
                  </div>
                  {/* checklist cold */}
                  <div>
                    <ul className=" mt-2 ml-6 text-[11px] sm:text-[12px] text-[#004F54]">
                      <h2 className="text-md sm:text-xl font-bold text-[#004F54]">
                        Cold Checklist
                      </h2>
                      <li>- Gloves</li>
                      <li>- Jacket</li>
                      <li>- Boots/ wellies</li>
                      <li>- Warm hat</li>
                    </ul>
                  </div>
                </div>
                {/* tips */}
                <div>
                  <ul className=" mt-2 ml-6 text-[11px] sm:text-[12px] text-[#004F54]">
                    <h2 className="text-md sm:text-xl font-bold text-[#004F54]">
                      General tips
                    </h2>
                    <li>- Stay hydrated</li>
                    <li>- Be prepared for sudden changes in weather</li>
                    <li>- Wear a rucksack to carry essentials</li>
                    <li>- Protect yourself from the elements</li>
                    <li>- Carry a first aid kit as a precaution</li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end mt-1 sm:mt-0 p-0 sm:p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-[#004F54] background-transparent font-bold uppercase px-6 py-2 text-[9px] sm:text-sm outline-none focus:outline-none mr-1 sm:mb-1 ease-linear transition-all duration-75"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close ❌
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default WeatherReqs;
