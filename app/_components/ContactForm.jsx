"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import { MdOutlineDone } from "react-icons/md";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdoqober");
  const [missingFields, setMissingFields] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are missing
    const fields = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const emptyFields = Object.entries(fields)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    setMissingFields(emptyFields);

    if (emptyFields.length > 0) {
      return;
    }

    await handleSubmit(e);

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false);
      }, 50000);
    }
  }, [formSubmitted]);

  return (
    <div>
      {!formSubmitted ? (
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center justify-center gap-5 mt-10"
        >
          {missingFields.length > 0 && (
            <div className="text-red-500 capitalize">
              Please fill in {missingFields.length === 1 ? "the" : ""}{" "}
              {missingFields.join(", ")}
            </div>
          )}

          <div className="w-full mb-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full mt-2 px-5 py-3 border-[1px] border-slate-400/40 bg-transparent focus:outline-none focus:bg-slate-400/10"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="w-full mb-3">
            <label htmlFor="phone">
              Can you share a{" "}
              <b>
                <i className="capitalize">phone number</i>
              </b>{" "}
              to call you on?
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="w-full mt-2 px-5 py-3 border-[1px] border-slate-400/40 bg-transparent focus:outline-none focus:bg-slate-400/10"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="w-full mb-3">
            <label htmlFor="email">
              Great! I&apos;ll need an{" "}
              <b>
                <i className="capitalize">email</i>
              </b>{" "}
              to reach you on too?
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full mt-2 px-5 py-3 border-[1px] border-slate-400/40 bg-transparent focus:outline-none focus:bg-slate-400/10"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="w-full">
            <label htmlFor="message">
              Awesome. Now, you can share a bit of{" "}
              <b>
                <i className="capitalize">context</i>
              </b>{" "}
              on what you want to achieve?
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 px-5 py-3 border-[1px] border-slate-400/40 bg-transparent focus:outline-none focus:bg-slate-400/10"
              rows={5}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="px-5 py-3 border-[1px] bg-transparent border-slate-400/40 hover:bg-slate-400/10 transition-colors duration-200 ease-in-out w-[40%] mt-5"
          >
            Submit
          </button>
        </form>
      ) : null}
      {formSubmitted && (
        <div className="w-full flex items-center justify-center mt-10">
          <div className="flex items-center text-lg justify-center text-white h-40 w-40 p-5 border-2 border-green-500 rounded-full">
            <MdOutlineDone className="text-3xl text-green-500" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
