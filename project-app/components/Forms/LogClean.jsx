import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import dataLogClean from "../../libs";
import Image from "next/image";

const LogCleanForm = () => {
  const [showModal, setShowModal] = React.useState(false);

  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  const handleSubmit = async function (values) {
    const response = await fetch(`${url}/logclean`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cleanname: values.cleanname,
        bags: values.bags,
        volunteers: values.volunteers
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Formik
      initialValues={{
        cleanname: "",
        bags: "",
        volunteers: "",
      }}
      validationSchema={Yup.object({
        // cleanID: Yup.string()
        //   .max(5, "Must be 5 characters or less")
        //   .required("Required"),
        // userID: Yup.string()
        //   .max(5, "Must be 5 characters or less")
        //   .required("Required"),
        cleanname: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        bags: Yup.number()
          .max(99999, "Must be less than 99999")
          .required("Required"),
        volunteers: Yup.number()
          .max(99999, "Must be less than 99999")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <div className="flex-col justify-center">
        <h3 className="text-3xl font-medium text-left mt-12 p-[0] pl-[34%] text-[#004F54]">
          Log A Clean
        </h3>
        <Form className=" p-[1rem]  bg-[#004F54] flex-col justify-center">
          <div className="ml-4 flex-col justify-center">
            {/* <label
              htmlFor="cleanID"
              className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
            >
              Clean ID
            </label>
            <Field
              name="cleanID"
              type="text"
              placeholder="324-123"
              className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage name="cleanID" />

            <label
              htmlFor="userID"
              className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
            >
              User ID
            </label>
            <Field
              name="userID"
              type="text"
              placeholder="324-123"
              className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage name="userID" /> */}

            <label
              htmlFor="cleanname"
              className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
            >
              Clean Name
            </label>
            <Field
              name="cleanname"
              type="text"
              placeholder="London Clean"
              className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage name="cleanname" />

            <label
              htmlFor="bags"
              className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
            >
              Bags Collected
            </label>
            <Field
              name="bags"
              type="text"
              placeholder="50"
              className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage name="bags" />

            <label
              htmlFor="volunteers"
              className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
            >
              Volunteers
            </label>
            <Field
              name="volunteers"
              type="text"
              placeholder="15"
              className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage name="volunteers" />
          </div>
          <button
            type="submit"
            className="text-white uppercase tracking-widest m-[1.2rem] ml-[32%]  bg-[#FF9505] hover:bg-orange-700  focus:outline-none font-medium rounded-lg text-lg sm:w-auto px-[3rem] py-2.5 text-center"
            onClick={() => setShowModal(true)}
          >
            Submit
          </button>
          {showModal ? (
            <>
              <div className=" z-[1005] sm:ml-0 mr-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-5/6 sm:w-auto sm:my-6 sm:mx-auto sm:max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-center p-0 sm:p-2 border-b border-solid border-slate-200 rounded-t">
                      <h3 className=" mt-2 ml-6 mr-6 text-lg sm:text-3xl font-bold text-[#004F54]">
                        Thanks For Doing Your Part
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="flex justify-center">
                      {/* picture div */}
                      <div className="flex-col justify-center relative p-2 sm:p-6 sm:ml-8">
                        <div className=" flex justify-center items-center mr-2 sm:mr-10 rounded sm:rounded-xl  p-2">
                          <Image src="/planet.svg" width={75} height={75} />
                        </div>
                        <h4 className="text-[#004F54] text-md sm:text-xl mr-6">
                          Your figures will now reflect on our stats...
                        </h4>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end mt-1 sm:mt-0 p-0 sm:p-2 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-[#004F54] background-transparent font-bold uppercase px-6 py-2 text-[9px] sm:text-sm outline-none focus:outline-none mr-1 sm:mb-1 ease-linear transition-all duration-75"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        <a href="/">Back to Home</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </Form>
      </div>
    </Formik>
  );
};

export default LogCleanForm;
