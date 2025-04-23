import FormSelect from "@/components/shared/Inputs/FormSelect";
import Socials from "@/components/shared/socials/Socials";
import { useState } from "react";
import React from "react";

const Contact1 = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      conService: "", 
      message: "",
    });
  
    const [loading, setLoading] = useState(false); // ✅ Define loading state

  // Google Form Action URL (Replace with your actual form URL)
  const GOOGLE_FORM_ACTION_URL ="https://docs.google.com/forms/d/e/1FAIpQLSelrJWi5k6bVwMPWxnRuOsPf2Hn14YdJBwObaeuXP33n6ImOQ/formResponse";

  // Google Form Field Entry IDs (Replace with your actual entry IDs)
  const ENTRY_IDS = {
    firstName: "entry.1294955074",
    lastName: "entry.1539076652",
    email: "entry.1465771810",
    phone: "entry.806806733",
    conService: "entry.1490164004",
    message: "entry.1227988742",
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formUrlEncoded = new URLSearchParams();
    formUrlEncoded.append(ENTRY_IDS.firstName, formData.firstName);
    formUrlEncoded.append(ENTRY_IDS.lastName, formData.lastName);
    formUrlEncoded.append(ENTRY_IDS.email, formData.email);
    formUrlEncoded.append(ENTRY_IDS.phone, formData.phone);
    formUrlEncoded.append(ENTRY_IDS.conService, formData.conService);
    formUrlEncoded.append(ENTRY_IDS.message, formData.message);

    const formUrl = `${GOOGLE_FORM_ACTION_URL}?${formUrlEncoded.toString()}`;



    try {
        await fetch(formUrl, { method: "GET", mode: "no-cors" });

        alert("Form submitted successfully! ✅");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            conService: "",
            message: "",
        });
    } catch (error) {
        console.error("Form submission error:", error);
        alert("Error submitting form ❌");
    } finally {
        setLoading(false);
    }
};


  return (
    <section id="contact">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
        <div className="container">
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10">
            {/* <!-- section heading --> */}
            <div className="md:col-start-1 md:col-span-7 lg:col-span-6 order-2 md:order-1">
              <div className=" wow fadeInLeft" data-wow-delay=".3s">
                <form onSubmit={handleSubmit} className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px">
                  <div className="mb-25px text-center">
                    <h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                      Let’s work together!
                    </h2>
                    <p
                      className="text-primary-color-light dark:text-body-color wow fadeInLeft"
                      data-wow-delay=".4s"
                    >
                      We simplify innovation to deliver IT solutions that elevate your business. Just simple like that!
                    </p>
                  </div>
                  {/* <!-- inputs --> */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-15px wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {/* <!-- first name --> */}
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName} onChange={handleChange} required
                        className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Last name --> */}
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName} onChange={handleChange} required
                        className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Email address --> */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email} onChange={handleChange} required

                        placeholder="Email address"
                        className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    {/* <!-- Phone number --> */}
                    <div>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone} onChange={handleChange} required
                        placeholder="Phone number"
                        className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    <div className="form_group sm:col-start-1 sm:col-span-2">
  <FormSelect
    value={formData.conService}
    onChange={(selectedValue) => setFormData({ ...formData, conService: selectedValue })}
  />
</div>

                    <div className="sm:col-start-1 sm:col-span-2">
                      <textarea
                        name="message"
                        cols="1"
                        rows="10"
                        value={formData.message} onChange={handleChange} required

                        placeholder="Message"
                        className="input-style text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                    </div>
                    <div className="sm:col-start-1 sm:col-span-2">
                    <button
        type="submit"
        className={`text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300 ${loading ? "loading" : ""}`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- experience single area --> */}
            <div className="md:col-start-8 md:col-span-5 order-1 md:order-2">
              <div className="contact-info-list">
                <ul className="flex flex-col gap-y-10">
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-phone-call leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:9779867177208"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                       +61 438 268 891 | +61 400 151 400                  
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@emperictech.com"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        info@emperictech.com.au
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center gap-25px position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    {/* <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-location leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Address
                      </p>
                      <a
                        href="https://maps.app.goo.gl/FAtbJK3XTXQdp6Wh8"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        Geelong VIC 3218,
                        Australia
                      </a>
                     
                    </div> */}
                  </li>
                  {/* <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Join Our Social Community
                      </p>
                  <Socials />
                  </div> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;