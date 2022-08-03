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
      <Form className="w-[60%] p-[4rem] ml-[22%]">
      <p className="text-3xl font-medium text-left m-[1] p-[0] pl-[34%] text-[#004F54]">Log A Clean</p>
      <div className="ml-[25%]">
        <label
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
        className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900">User ID</label>
        <Field
          name="userID"
          type="text"
          placeholder="324-123"
          className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          
        />
        <ErrorMessage name="userID" />

        <label 
        htmlFor="bagsCollected"
        className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900">Bags Collected</label>
        <Field
          name="bagsCollected"
          type="text"
          placeholder="50"
          className="w-[50%] h-[3rem] text-base shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="bagsCollected" />

        <label 
        htmlFor="volunteers"
        className="block mb-[0rem] text-lg p-[0.4rem] font-medium text-gray-900 dark:text-gray-900">Volunteers</label>
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
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LogCleanForm;
