import React from "react";
import { useState } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

export default function LogClean() {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      initialValues: {
        email: "",
        name: "",
        message: "",
      },
      onSubmit: () => {
        setMessage("Form submitted");
        setSubmitted(true);
      },
      validationSchema: yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Must be a valid email")
          .required("Email is required"),
        message: yup.string().required("Message is required"),
      }),
    },
  });
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div hidden={!submitted} className="alert alert-primary" role="alert">
        {message}
      </div>
      <h1>Hello World</h1>

      <form className="w-50" onSubmit={formik.handleSubmit}>
        <div className="border-[0.1rem] m-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className=" border-[0.1rem] m-4 rounded"
            placeholder="Enter Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>
        <div className="border-[0.1rem] m-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border-[0.1rem] m-4 rounded"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        <div className="border-[0.1rem] m-4">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className=" border-[0.1rem] m-4 rounded"
            placeholder="Your message ..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && (
            <div className="text-danger">{formik.errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="m-2 bg-[blue] text-[white] border-[0.2rem] rounded p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
