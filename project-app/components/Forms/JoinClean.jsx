import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import data from "../../libs";

export const JoinCleanForm = () => {
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
          className="font-bold block text-sm  text-gray-900 dark:text-gray-900"
        >
          Name
        </label>
        <Field
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          name="name"
          type="text"
        />
        <ErrorMessage name="name" />

        <label
          htmlFor="email"
          className="font-bold block text-sm text-gray-900 dark:text-gray-900"
        >
          Email
        </label>
        <Field
          name="email"
          type="text"
          className="mb-[5px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <ErrorMessage name="email" />

        <button
          type="submit"
          className="text-white bg-[#FF9505]  bg-[#FF9505]-700 hover:bg-[#FF9505]-800 focus:ring-4 focus:outline-none focus:ring-[#FF9505]-300 px-1 py-1 font-medium rounded-lg text-sm w-14 mt-2 text-center dark:bg-600 dark:hover:bg-[#FF9505]-700 dark:focus:ring-[#FF9505]-800"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export const JoinCleanModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  // function JoinCloseButton (){
  //     if (showModal == true){
  //     return "Close"}
  //     else if (showModal == false) {return "Join"}}
  return (
    <>
      <button
        className="bg-[#004F54] ml-0 mb-3 md:ml-0 text-white font-medium text-xs md:text-sm px-1 py-1 mt-2 sm:mt-2 rounded hover:bg-[#004F54]/90 outline-none 
          focus:outline-none mr-1 mb-1 ease-linear transition-all duration-100 w-12"
        type="button"
        onClick={() => {
          if (showModal == false) {
            setShowModal(true);
          } else if (showModal == true) {
            setShowModal(false);
          }
        }}
      >
        {showModal ? "Close" : "Join"}
      </button>

      {showModal ? (
        <>
          <JoinCleanForm />
        </>
      ) : null}
    </>
  );
};
