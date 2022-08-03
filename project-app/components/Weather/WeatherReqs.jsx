import React from "react";
import Image from "next/image";

const WeatherReqs = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#004F54] ml-4 sm:ml-0 text-white font-bold uppercase text-xs md:text-sm p-1 sm:p2 sm:mt-0 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-75 w-12 sm:w-12 mt-1 sm:mt-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Tips
      </button>

      {showModal ? (
        <>
          <div className=" z-[1005] sm:ml0 mr-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-5/6 sm:w-auto sm:my-6 sm:mx-auto sm:max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-0 sm:p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className=" mt-2 ml-6 text-lg sm:text-3xl font-bold text-[#004F54]">
                    Weather Tips
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
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
                      <div className="bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/winter-hat.svg" width={75} height={75} />
                      </div>
                    </div>
                  </div>
                </div>

                <ul className=" mt-2 ml-6 text-xs sm:text-md">
                  <h2 className="text-md sm:text-xl font-bold">Checklist</h2>
                  <li>- Stay hydrated</li>
                  <li>- Take appropriate clothing</li>
                  <li>- Be prepared for sudden changes in weather</li>
                  <li>- Wear a rucksack to carry essentials</li>
                </ul>
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
