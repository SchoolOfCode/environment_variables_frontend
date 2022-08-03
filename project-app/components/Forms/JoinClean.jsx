import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import data from "../../libs";

const JoinCleanForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        email: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Thanks for joining a clean");
          data.push(values); // substitute for post req
          console.log(data);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
         Name
        </label>
        <Field
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="name"
          type="text"
        />
        <ErrorMessage name="name" />

        <label htmlFor="email">email</label>
        <Field
          name="email"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="email" />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default JoinCleanForm;



const WeatherReqs = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className="bg-[#004F54] ml-4 md:ml-1 text-white font-bold uppercase text-xs md:text-sm px-4 py-2 md:px-2 md:py-2 mt-2 sm:mt-0 rounded shadow hover:shadow-lg outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100 w-24"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Weather Tips
        </button>
  
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="ml-6 text-5xl font-bold text-[#004F54]">
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
                    <div className="relative p-6 flex-auto">
                      {/* hot icons */}
                      <div className="flex p-4">
                        <div className="mr-10 bg-red-600 rounded-xl shadow-2xl p-4">
                          <Image src="/sunglasses.svg" width={100} height={100} />
                        </div>
                        <div className="bg-red-600 rounded-xl shadow-2xl p-4">
                          <Image src="/cap.svg" width={100} height={100} />
                        </div>
                      </div>
                      <div className="flex p-4">
                        <div className="mr-10 bg-red-600 rounded-xl shadow-2xl p-4">
                          <Image src="/water.svg" width={100} height={100} />
                        </div>
                        <div className="bg-red-600 rounded-xl shadow-2xl p-4">
                          <Image src="/sun-cream.svg" width={100} height={100} />
                        </div>
                      </div>
                    </div>
  
                    {/* cold icons div */}
                    <div className="relative p-6 flex-auto ml-16">
                      {/* cold icons */}
                      <div className="flex p-4">
                        <div className="mr-10 bg-sky-600 rounded-xl shadow-2xl p-4">
                          <Image src="/jacket.svg" width={100} height={100} />
                        </div>
                        <div className="bg-sky-600 rounded-xl shadow-2xl p-4">
                          <Image src="/gloves.svg" width={100} height={100} />
                        </div>
                      </div>
                      <div className="flex p-4">
                        <div className="mr-10 bg-sky-600 rounded-xl shadow-2xl p-4">
                          <Image src="/boots.svg" width={100} height={100} />
                        </div>
                        <div className="bg-sky-600 rounded-xl shadow-2xl p-4">
                          <Image src="/winter-hat.svg" width={100} height={100} />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <ul className="m-8 text-xl font-bold">
                    <h2 className="text-2xl">Checklist</h2>
                    <li>- Stay hydrated</li>
                    <li>- Take appropriate clothing</li>
                    <li>- Be prepared for sudden changes in weather</li>
                    <li>- Wear a rucksack to carry essentials</li>
                  </ul>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-[#004F54] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
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