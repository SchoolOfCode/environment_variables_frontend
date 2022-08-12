//Import packages
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

//Component
const LogCleanForm = () => {
  //Defining state
  const [showModal, setShowModal] = React.useState(false);

  //Defining constants
  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  //Defining functions
  const handleSubmit = async function (values) {
    const response = await fetch(`${url}/logclean`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cleanname: values.cleanname,
        bags: values.bags,
        volunteers: values.volunteers,
      }),
    });
    const data = await response.json();
    if (data.success) {
      setShowModal(true);
    }
    console.log(data);
  };

  //Returning the form
  return (
    <Formik
      initialValues={{
        cleanname: "",
        volunteers: "",
        bags: "",
      }}
      validationSchema={Yup.object({
        /* NOT USING USER ID AT PRESENT
        max(5, "Must be 5 characters or less")
           .required("Required"),
        userID: Yup.string()
          max(5, "Must be 5 characters or less")
          required("Required"), */
        cleanname: Yup.string()
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        volunteers: Yup.number()
          .max(99999, "Must be less than 99999")
          .required("Required"),
        bags: Yup.number()
          .max(99999, "Must be less than 99999")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col bg-[#004F54]/90 w-11/12 md:w-5/12 rounded-xl pb-6">
        <div className="flex flex-col py-4 sm:px-8 px-4 ">
          {/* <label
              htmlFor="cleanID"
              className="pb-2 text-white text-lg font-medium"
            >
              Clean ID
            </label>
            <Field
              name="cleanID"
              type="text"
              placeholder="324-123"
              className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
            />
            <ErrorMessage name="cleanID" />

            <label
              htmlFor="userID"
              className="pb-2 text-white text-lg font-medium"
            >
              User ID
            </label>
            <Field
              name="userID"
              type="text"
              placeholder="324-123"
              className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
            />
            <ErrorMessage name="userID" /> */}

          <label
            htmlFor="cleanname"
            className="pb-2 text-white text-lg font-medium"
          >
            Your Clean's Name
          </label>
          <Field
            name="cleanname"
            type="text"
            placeholder="London Clean"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage
            name="cleanname"
            component="div"
            className="text-[#FF9505] italic font-medium"
          />
          <label
            htmlFor="volunteers"
            className="pb-2 text-white text-lg font-medium"
          >
            Total Volunteers Attended
          </label>
          <Field
            name="volunteers"
            type="text"
            placeholder="15"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage
            name="volunteers"
            component="div"
            className="text-[#FF9505] italic font-medium"
          />

          <label htmlFor="bags" className="pb-2 text-white text-lg font-medium">
            Total Bags Collected (each bag is estimated at 5kg)
          </label>
          <Field
            name="bags"
            type="text"
            placeholder="50"
            className="w-full h-10 p-2.5 mb-1 bg-gray-50 border-2 rounded-lg shadow-inner text-black text-base  focus:ring-[#FF9505]"
          />
          <ErrorMessage
            name="bags"
            component="div"
            className="text-[#FF9505] italic font-medium"
          />
        </div>

        <div className="flex justify-center w-full pt-4">
          <button
            type="submit"
            className="flex rounded-lg w-[110px] h-10 bg-[#FF9505] hover:bg-orange-700 place-content-center place-items-center text-white font-medium text-lg uppercase tracking-wide ease-linear transition-all duration-75"
          >
            Submit
          </button>
        </div>

        {/* Form ends here, modal below */}

        {showModal ? (
          <>
            <div className="z-[1005] fixed inset-0 flex justify-center items-center overflow-x-hidden overflow-y-auto">
              <div className="w-5/6 sm:w-auto sm:my-6 sm:mx-auto sm:max-w-6xl">
                {/*content*/}
                <div className="flex flex-col w-full bg-white border-0 rounded-lg shadow-lg">
                  {/*modal header*/}
                  <div className="flex justify-center p-0 sm:p-2 border-b border-solid border-slate-200 rounded-t">
                    <h2 className="mt-2 mx-6 text-xl sm:text-3xl font-bold text-[#004F54] text-center">
                      Thank you for doing your part!
                    </h2>
                  </div>
                  {/*modal body*/}
                  <div className="flex justify-center">
                    {/* picture div */}
                    <div className="flex-col justify-center p-6 space-y-4">
                      {/* icon */}
                      <div className="flex justify-center items-center rounded sm:rounded-xl ">
                        <Image src="/planet.svg" width={75} height={75} />
                      </div>
                      {/* text */}
                      <h3 className="text-[#004F54] text-lg sm:text-xl text-center">
                        Your hard work is now reflected in our stats
                      </h3>
                    </div>
                  </div>
                  {/*Modal footer*/}
                  <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-transparent font-bold uppercase px-7 py-3 text-xs sm:text-sm"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <a href="/">Back to home</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Applies a fade effect to the underlying page */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </Form>
    </Formik>
  );
};

export default LogCleanForm;
