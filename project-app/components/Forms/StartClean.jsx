import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import data from "../../libs/startLib";
import { MapContext } from "../../context/MapContext"

const StartCleanForm = () => {
  const { setCoords, coords } = useContext(MapContext);
  console.log("Form Coordinates:", coords)

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
        latitude: Yup.number()
          .required("Required"),
        longitude: Yup.number()
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Thanks for logging your clean");
          data.push(values); // substitute for post req
          console.log(data);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className=" w-[60%] p-[4rem] ml-[20%]">
        <p className="text-3xl font-medium text-left m-[1] p-[0] pl-[36%] text-[#004F54]">Start A Clean</p>
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
        <ErrorMessage name="userID"/>

        <label
         htmlFor="cleanName"
         className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
         >Clean Name
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
         >Location
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
        >Date</label>
        <Field
          name="date"
          type="date"
          className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="date" />

        <label
         htmlFor="startTime"
         className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
         >Start Time</label>
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
         >End Time</label>
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
        >Host</label>
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
         >Notes</label>
        <Field
          name="notes"
          type="text"
          className=" w-[50%] h-[8rem] mb-[.6rem]  text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="notes" />

        <label
         htmlFor="latitude"
         className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
          >latitude</label>
        <Field
          value={coords[0]}
          name="latitude"
          type="number"
          className="w-[50%] h-[3rem] mb-[.6rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage  name="latitude" />

        <label 
        htmlFor="longitude"
        className="mb-[0rem] block text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900"
        >longitude</label>
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
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default StartCleanForm;
