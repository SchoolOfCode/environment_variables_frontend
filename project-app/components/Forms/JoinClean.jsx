import React from "react";
import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export const JoinCleanForm = ({ showModal, setShowModal }) => {
  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  const handleSubmit = async function (values) {
    const response = await fetch(`${url}/joinclean`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        comments: values.comments,
      }),
    });
    const data = await response.json();
    alert(
      "Thanks for joining a cleanup! Be there 15 mins prior on the day for the briefing."
    );
    setShowModal(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        comments: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required"),
        comments: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <label
          htmlFor="name"
          className="font-bold block text-sm  text-gray-900 "
        >
          Name
        </label>
        <Field
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF9505]  focus:border-[#FF9505] block w-full p-2.5 "
          name="name"
          type="text"
        />
        <ErrorMessage name="name" />

        <label
          htmlFor="comments"
          className="font-bold block text-sm text-gray-900 "
        >
          Comments
        </label>
        <Field
          name="comments"
          type="text"
          className="mb-[5px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF9505]  focus:border-[#FF9505]  block w-full p-2.5 "
        />
        <ErrorMessage name="comments" />

        <button
          type="submit"
          className="text-white bg-[#FF9505]  bg-[#FF9505]-700 hover:bg-[#FF9505]-800 focus:ring-4 focus:outline-none focus:ring-[#FF9505]-300 px-1 py-1 font-medium rounded-lg text-sm w-14 mt-2 text-center"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export const JoinCleanModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-[#004F54] ml-0 mb-4 md:ml-0 text-white font-medium text-xs md:text-sm px-1 py-1 mt-2 sm:mt-2 rounded hover:bg-[#004F54]/90 outline-none 
          focus:outline-none mr-1 ease-linear transition-all duration-100 w-12"
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
          <JoinCleanForm setShowModal={setShowModal} showModal={showModal} />
        </>
      ) : null}
    </>
  );
};
