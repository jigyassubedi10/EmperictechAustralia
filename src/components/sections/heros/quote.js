"use client";

import QuoteForm from "@/components/shared/Inputs/QuoteForm";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import GetQuoteBreadcrumb from "@/components/sections/heros/GetQuoteBreadCarumb";


const GetQuoteSection = () => {
  const [quoteFormData, setQuoteFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    help: "",
    businessType: "",
    industry: "",
    message: "",
    projectType: "",
  });

  const [loading, setLoading] = useState(false);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSedtphECWGCzou_B3kn_k6iB9KFd4hfp4CDOnfqjKUWJTt6JQ/formResponse";

  const ENTRY_IDS = {
    firstName: "entry.710866193",
    lastName: "entry.1744972909",
    email: "entry.192655377",
    phone: "entry.1981487686",
    help: "entry.1558491495",
    businessType: "entry.25827797",
    industry: "entry.144246849",
    message: "entry.2060210165",
    projectType: "entry.1883949435",
  };

  const handleChange = (e) => {
    setQuoteFormData({ ...quoteFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formUrlEncoded = new URLSearchParams();
    formUrlEncoded.append(ENTRY_IDS.firstName, quoteFormData.firstName);
    formUrlEncoded.append(ENTRY_IDS.lastName, quoteFormData.lastName);
    formUrlEncoded.append(ENTRY_IDS.email, quoteFormData.email);
    formUrlEncoded.append(ENTRY_IDS.phone, quoteFormData.phone);
    formUrlEncoded.append(ENTRY_IDS.help, quoteFormData.help);
    formUrlEncoded.append(ENTRY_IDS.businessType, quoteFormData.businessType);
    formUrlEncoded.append(ENTRY_IDS.industry, quoteFormData.industry);
    formUrlEncoded.append(ENTRY_IDS.message, quoteFormData.message);
    formUrlEncoded.append(ENTRY_IDS.projectType, quoteFormData.projectType);

    const formUrl = `${GOOGLE_FORM_ACTION_URL}?${formUrlEncoded.toString()}`;

    try {
      await fetch(formUrl, { method: "GET", mode: "no-cors" });

      alert("Form submitted successfully! ✅");
      setQuoteFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        help: "",
        businessType: "",
        industry: "",
        message: "",
        projectType: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <GetQuoteBreadcrumb />

    <section id="contact">
      <div className="bg-cream-light-color dark:bg-black-color py-60px  ">
        <div className="container">
          <div className="flex flex-col items-center">
            {/* Section heading */}
            <div className="text-center mb-30px">
              {/* <h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                Get a Quote
              </h2> */}
              <p className="text-primary-color-light dark:text-body-color">
                Let us know what you need, and we will provide a tailored solution for you!
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px w-full max-w-3xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-15px mb-25px">
                {/* First name */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={quoteFormData.firstName}
                    onChange={handleChange}
                    required
                    className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                  />
                </div>

                {/* Last name */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={quoteFormData.lastName}
                    onChange={handleChange}
                    required
                    className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={quoteFormData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={quoteFormData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                  />
                </div>

                {/* How can we help you? */}
                <div className="form_group sm:col-start-1 sm:col-span-2 ">
                  <QuoteForm
                  
                    question="How can we help you?" 
                    value={quoteFormData.help}
                    onChange={(selectedValue) =>
                      setQuoteFormData({ ...quoteFormData, help: selectedValue })
                    }
                    options={[
                      "Web Development",
                      "Cloud Services",
                      "IT/Tech Support",
                      "Digital Marketing",
                      "UI/UX Design",
                      "Cyber Security",
                      "Data Solutions",
                      "Graphics & Design",
                    ]}
                  />
                </div>

                {/* What type of business */}
                <div className="form_group sm:col-start-1 sm:col-span-2">
                  <QuoteForm
                    question="What type of business are you running?"
                    value={quoteFormData.businessType}
                    onChange={(selectedValue) =>
                      setQuoteFormData({ ...quoteFormData, businessType: selectedValue })
                    }
                    options={[
                      "Start-Up",
                      "Small & Medium Enterprise",
                      "Large Business",
                    ]}
                  />
                </div>

                {/* What industry */}
                <div className="form_group sm:col-start-1 sm:col-span-2">
                  <QuoteForm
                    question="What industry does your business operate in?"
                    value={quoteFormData.industry}
                    onChange={(selectedValue) =>
                      setQuoteFormData({ ...quoteFormData, industry: selectedValue })
                    }
                    options={[
                      "Technology",
                      "Finance",
                      "Retail",
                      "Healthcare",
                      "Manufacturing",
                      "Entertainment",
                    ]}
                  />
                </div>

                {/* Tell us about your project */}
                <div className="form_group sm:col-start-1 sm:col-span-2">
                  <label htmlFor="message" className="block text-l text-gray-color-2 dark:text-body-color mb-3">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="1"
                    rows="10"
                    value={quoteFormData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                  />
                </div>

                {/* New or Existing project */}
                <div className="form_group sm:col-start-1 sm:col-span-2">
                  <QuoteForm
                    question="Is this a New or Existing project?"
                    value={quoteFormData.projectType}
                    onChange={(selectedValue) =>
                      setQuoteFormData({ ...quoteFormData, projectType: selectedValue })
                    }
                    options={["New Project", "Existing Project"]}
                  />
                </div>

                {/* Submit button */}
                <div className="sm:col-start-1 sm:col-span-2">
                  <button
                    type="submit"
                    className={`text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300 ${loading ? "loading" : ""}`}
                  >
                    {loading ? "Sending..." : "Get a Quote"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GetQuoteSection;
