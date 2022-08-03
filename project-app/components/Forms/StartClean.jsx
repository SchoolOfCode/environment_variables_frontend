import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import data from "../../libs/startLib";
import { MapContext } from "../../context/MapContext";
import Image from "next/image";

const StartCleanForm = () => {
  const { setCoords, coords } = useContext(MapContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Formik
      initialValues={{
        userID: "",
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
        userID: Yup.string()
          .max(5, "Must be 5 characters or less")
          .required("Required"),
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
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        notes: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        latitude: Yup.number(),
        longitude: Yup.number(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          data.push(values); // substitute for post req
          console.log("data has been pushed", data);

          <a href="/" />;
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className=" w-[60%] p-[4rem] ml-[20%]">
        <p className="text-3xl font-medium text-left m-[1] p-[0] pl-[36%] text-[#004F54]">
          Start A Clean
        </p>
        <div className="ml-[25%]">
          <label
            htmlFor="userID"
            className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            User ID
          </label>
          <Field
            placeholder="324-123"
            className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            name="userID"
            type="text"
          />
          <ErrorMessage name="userID" />

          <label
            htmlFor="cleanName"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Clean Name
          </label>
          <Field
            placeholder="Heros"
            name="cleanName"
            type="text"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="cleanName" />

          <label
            htmlFor="location"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Location
          </label>
          <Field
            placeholder="London"
            name="location"
            type="text"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="location" />

          <label
            htmlFor="date"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Date
          </label>
          <Field
            name="date"
            type="date"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="date" />

          <label
            htmlFor="startTime"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Start Time
          </label>
          <Field
            placeholder="09:00"
            name="startTime"
            type="text"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="startTime" />

          <label
            htmlFor="endTime"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            End Time
          </label>
          <Field
            placeholder="20:00"
            name="endTime"
            type="text"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="endTime" />

          <label
            htmlFor="host"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Host
          </label>
          <Field
            placeholder="Leon Smith"
            name="host"
            type="text"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="host" />

          <label
            htmlFor="notes"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            Notes
          </label>
          <Field
            name="notes"
            type="text"
            className=" w-[50%] h-[8rem] mb-[.6rem]  text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="notes" />

          <label
            htmlFor="latitude"
            className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >
            latitude
          </label>
          <Field
            value={coords[0]}
            name="latitude"
            type="number"
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
            className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
          <ErrorMessage name="longitude" />
        </div>
        <button
          type="submit"
          className="text-white uppercase tracking-widest m-[1.2rem] ml-[35%]  bg-[#FF9505] hover:bg-orange-700  focus:outline-none font-medium rounded-lg text-lg sm:w-auto px-[3rem] py-2.5 text-center"
          onClick={() => setShowModal(true)}
        >
          Submit
        </button>
        {showModal ? (
          <>
            <div className=" z-[1005] sm:ml0 mr-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-5/6 sm:w-auto sm:my-6 sm:mx-auto sm:max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-0 sm:p-2 border-b border-solid border-slate-200 rounded-t">
                    <h3 className=" mt-2 ml-6 mr-6 text-lg sm:text-3xl font-bold text-[#004F54]">
                      Thanks For Doing Your Part
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="flex">
                    {/* picture div */}
                    <div className="relative p-2 sm:p-6 flex-auto sm:ml-8">
                      {/* cold icons */}

                      <div className="mr-2 sm:mr-10 bg-sky-600 rounded sm:rounded-xl shadow-2xl p-2">
                        <Image src="/jacket.svg" width={75} height={75} />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end mt-1 sm:mt-0 p-0 sm:p-2 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-[#004F54] background-transparent font-bold uppercase px-6 py-2 text-[9px] sm:text-sm outline-none focus:outline-none mr-1 sm:mb-1 ease-linear transition-all duration-75"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <a href="/">Back to Home </a>
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
