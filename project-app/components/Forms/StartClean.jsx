//Import packages
import React, { useContext } from "react";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//Import context
import { MapContext } from "../../context/MapContext";

//Define constants
const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

//Component
const StartCleanForm = () => {
  //Defining state and context
  const { setCoords, coords } = useContext(MapContext);
  const [showModal, setShowModal] = React.useState(false);
  console.log("co-ords from form page:", coords);

  //Defining functions
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

  //Returning the form
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
        /* NOT USING USER ID AT PRESENT
        userID: Yup.string()
          .max(10, "Must be 10 characters or less")
           .required("Required"),*/
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
          .required("Required"), //Is this really required?
        latitude: Yup.number(),
        longitude: Yup.number(),
      })}
      onSubmit={handleSubmit}
    >

      <Form className="flex flex-col bg-[#004F54]/90 w-11/12 sm:w-3/4 rounded-xl">
        <div className="flex flex-col p-5">
          {/* CURRENTLY NOT USING THIS FIELD */}
          {/*<label
            htmlFor="userID"
            className="pb-2 text-white text-lg font-medium"
          >
            #User ID
          </label>
          <Field
            placeholder="0123"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
            name="userID"
            type="text"
          />
          <ErrorMessage name="userID" component="div" className="text-white italic"/> */}

          <label
            htmlFor="cleanName"
            className="pb-2 text-white text-lg font-medium"
          >
            Your Clean-up Name
          </label>
          <Field
            placeholder="e.g. Brighton Pier clean-up"
            name="cleanName"
            type="text"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="cleanName" component="div" className="text-white italic"/>

          <label
            htmlFor="location"
            className="py-2 text-white text-lg font-medium"
          >
            Meeting Location
          </label>
          <Field
            placeholder="e.g. Coffee shop at end of pier"
            name="location"
            type="text"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="location" component="div" className="text-white italic"/>

          <label
            htmlFor="date"
            className="py-2 text-white text-lg font-medium"
          >
            Date
          </label>
          <Field
            name="date"
            type="date"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="date" component="div" className="text-white italic"/>

          <label
            htmlFor="startTime"
            className="py-2 text-white text-lg font-medium"
          >
            Start Time
          </label>
          <Field
            placeholder="10:00"
            name="startTime"
            type="text"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="startTime" component="div" className="text-white italic"/>

          <label
            htmlFor="endTime"
            className="py-2 text-white text-lg font-medium"
          >
            End Time
          </label>
          <Field
            placeholder="13:00"
            name="endTime"
            type="text"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="endTime" component="div" className="text-white italic"/>

          <label
            htmlFor="host"
            className="py-2 text-white text-lg font-medium"
          >
            Host
          </label>
          <Field
            placeholder="Your name"
            name="host"
            type="text"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="host" component="div" className="text-white italic"/>

          <label
            htmlFor="notes"
            className="py-2 text-white text-lg font-medium"
          >
            Notes
          </label>
          <Field
            as="textarea"
            name="notes"
            type="text"
            className="ww-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage name="notes" component="div" className="text-white italic"/>

          <div className="flex justify-center w-full pt-3">
            <button
              type="submit"
              className="flex rounded-lg w-[110px] h-10 bg-[#FF9505] hover:bg-orange-700 place-content-center place-items-center text-white font-medium text-lg uppercase tracking-wide"
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
                      Thank you for doing your part!
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="flex justify-center">
                    {/* picture div */}
                    <div className="flex-col justify-center relative p-2 sm:p-6 sm:ml-8">
                      {/* cold icons */}

                      <div className="flex justify-center items-center mr-2 sm:mr-10 rounded sm:rounded-xl  p-2">
                        <Image src="/planet.svg" width={75} height={75} />
                      </div>
                      <h4 className="text-[#004F54] text-md sm:text-xl">
                        Your clean-up has been added to the map
                      </h4>
                    </div>
                  </div>
                  {/*Modal footer*/}
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
