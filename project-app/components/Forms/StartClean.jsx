import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import data from "../../libs/startLib";
import { MapContext } from "../../context/MapContext";

const StartCleanForm = () => {
  const { setCoords, coords } = useContext(MapContext);
  console.log("Form Coordinates:", coords);

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
          alert("Thanks for logging your clean");
          data.push(values); // substitute for post req
          console.log(data);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label
          htmlFor="userID"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          User ID
        </label>
        <Field
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="userID"
          type="text"
        />
        <ErrorMessage name="userID" />

        <label htmlFor="cleanName">Clean Name</label>
        <Field
          name="cleanName"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="cleanName" />

        <label htmlFor="location">Location</label>
        <Field
          name="location"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="location" />

        <label htmlFor="date">Date</label>
        <Field
          name="date"
          type="date"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="date" />

        <label htmlFor="startTime">Start Time</label>
        <Field
          name="startTime"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="startTime" />

        <label htmlFor="endTime">End Time</label>
        <Field
          name="endTime"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="endTime" />

        <label htmlFor="host">Host</label>
        <Field
          name="host"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="host" />

        <label htmlFor="notes">Notes</label>
        <Field
          name="notes"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="notes" />

        <label htmlFor="latitude">latitude</label>
        <Field
          value={coords[0]}
          name="latitude"
          type="number"
          className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="latitude" />

        <label htmlFor="longitude">longitude</label>
        <Field
          value={coords[1]}
          name="longitude"
          type="number"
          className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="longitude" />

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

export default StartCleanForm;
