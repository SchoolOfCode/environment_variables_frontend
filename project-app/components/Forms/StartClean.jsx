import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import dataStartClean from "../../libs/startLib";
import { MapContext } from "../../context/MapContext";
import Image from "next/image";

const StartCleanForm = () => {
  const { setCoords, coords } = useContext(MapContext);
  const [showModal, setShowModal] = React.useState(false);
  console.log("co-ords from form page:", coords);

  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  const handleSubmit = async function (values) {
    const response = await fetch(`${url}/startclean`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cleanName: values.cleanName,
        location: values.location,
        date: values.date,
        startTime: values.startTime,
        endTime: values.endTime,
        host: values.host,
        notes: values.notes,
        notes: values.notes,
        latitude: coords[0],
        longitude: coords[1],
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Formik
      initialValues={{
        // userID: "",
        cleanName: "",
        location: "",
        date: "",
        startTime: "",
        endTime: "",
        host: "",
        notes: "",
        latitude: "",
        longitude: "",
      }}
      validationSchema={Yup.object({
        // userID: Yup.string()
        //   .max(10, "Must be 10 characters or less")
        //   .required("Required"),
        cleanName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        location: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        date: Yup.date().required("Required"),
        startTime: Yup.string()
          .max(8, "Must be 8 characters or less")
          .required("Required"),
        endTime: Yup.string()
          .max(8, "Must be 8 characters or less")
          .required("Required"),
        host: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        notes: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        latitude: Yup.number(),
        longitude: Yup.number(),
      })}
      onSubmit={handleSubmit}
    >

      
      <Form className="flex flex-col ml-[3rem] pb-[2rem] bg-[#004F54]/90 w-[70%] mr-9 rounded-xl">
        <div className="flex flex-col ml-[20%] w-[60%]">
          {/* May not use User_Id */}
          {/*<label
            htmlFor="userID"
            className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            #User ID
          </label>
          <Field
            placeholder="0123"
            className="border-[#FF9505] w-[100%] h-[2.5rem] text-base shadow-inner bg-gray-50 border  text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name="userID"
            type="text"
           
          />
          <ErrorMessage name="userID" className="text-white"/> */}


          <label
            htmlFor="cleanName"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Your Cleanup Name
          </label>
          <Field
            placeholder="brighton pier cleanup"
            name="cleanName"
            type="text"
            className="border-[#FF9505]w-[100%] h-[2.5rem] mb-[.6rem] shadow-inner text-black text-base bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="cleanName" />

          <label
            htmlFor="location"
            className="mb-[0rem]  block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Meeting Location
          </label>
          <Field
            placeholder="London"
            name="location"
            type="text"
            className="border-[#FF9505]  w-[100%] h-[2.5rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="location" />

          <label
            htmlFor="date"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Date
          </label>
          <Field
            name="date"
            type="date"
            className="border-[#FF9505] w-[100%] h-[2.5rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="date" />

          <label
            htmlFor="startTime"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Start Time
          </label>
          <Field
            placeholder="10:00"
            name="startTime"
            type="text"
            className="border-[#FF9505]  w-[100%] h-[2.5rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="startTime" />

          <label
            htmlFor="endTime"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            End Time
          </label>
          <Field
            placeholder="13:00"
            name="endTime"
            type="text"
            className=" border-[#FF9505] w-[100%] h-[2.5rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="endTime" />

          <label
            htmlFor="host"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Host
          </label>
          <Field
            placeholder="Your name"
            name="host"
            type="text"
            className=" border-[#FF9505] w-[100%] h-[2.5rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="host" />

          <label
            htmlFor="notes"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-white dark:text-gray-900"
          >
            Notes
          </label>
          <Field
            as="textarea"
            name="notes"
            type="text"
            className=" border-[#FF9505] w-[100%] h-[6rem] mb-[.6rem]  text-base shadow-inner bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="notes" />

          {/* <label
            htmlFor="latitude"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            latitude
          </label>
          <Field
            value={coords[0]}
            name="latitude"
            type="number"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-[#FF9505] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="latitude" />

          <label
            htmlFor="longitude"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            longitude
          </label>
          <Field
            value={coords[1]}
            name="longitude"
            type="number"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-[#FF9505] dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="longitude" /> */}
          <div className="flex justify-center w-[100%]">
            <button
              type="submit"
              className="flex justify-self-center		text-white uppercase w-[110px] tracking-widest  bg-[#FF9505] hover:bg-orange-700  focus:outline-none font-medium rounded-lg text-lg px-[1rem] py-2.5 text-center"
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
          </div>
        </div>
        {showModal ? (
          <>
            <div className=" z-[1005] sm:ml-0 mr-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none">
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
                      {/* cold icons */}

                      <div className=" flex justify-center items-center mr-2 sm:mr-10 rounded sm:rounded-xl  p-2">
                        <Image src="/planet.svg" width={75} height={75} />
                      </div>
                      <h4 className="text-[#004F54] text-md sm:text-xl">
                        You can now find your cleanup on our map...
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
                      <a href="/#map">Back to Map</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </Form>
    </Formik>
  );
};

export default StartCleanForm;
