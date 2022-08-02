import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import data from "../../libs";

const LogCleanForm = () => {
  return (
    <Formik
      initialValues={{
        cleanID: "",
        userID: "",
        bagsCollected: "",
        volunteers: "",
      }}
      validationSchema={Yup.object({
        cleanID: Yup.string()
          .max(5, "Must be 5 characters or less")
          .required("Required"),
        userID: Yup.string()
          .max(5, "Must be 5 characters or less")
          .required("Required"),
        bagsCollected: Yup.string()
          .max(5, "Must be 5 characters or less")
          .required("Required"),
        volunteers: Yup.string()
          .max(5, "Must be 5 characters or less")
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
      <Form>
        <label
          htmlFor="cleanID"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          Clean ID
        </label>
        <Field
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="cleanID"
          type="text"
        />
        <ErrorMessage name="cleanID" />

        <label htmlFor="userID">User ID</label>
        <Field
          name="userID"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="userID" />

        <label htmlFor="bagsCollected">Bags Collected</label>
        <Field
          name="bagsCollected"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="bagsCollected" />

        <label htmlFor="volunteers">Volunteers</label>
        <Field
          name="volunteers"
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="volunteers" />

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

export default LogCleanForm;
