import AboutBreadcrumb from "@/components/sections/about/AboutBreadcarumb";
import getAllAbout from "@/libs/getAllAbout";
import Teams1 from "@/components/sections/team/Teams1";
import Link from "next/link";

export default function About() {
  const about = getAllAbout();

  const { whyChooseEmperic } = about || {};
  const {
    title: whyChooseEmpericTitle,
    desc: whyChooseEmpericDesc,
    items: whyChooseEmpericItems
  } = whyChooseEmperic || {};

  
  return (
    <div>
      {/* Breadcrumb */}
      <AboutBreadcrumb />

      {/* About Us Section */}
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl text-primary-color-light dark:text-white-color font-bold text-center mt-8 mb-6">{about.title}</h1>
        <p className="text-lg text-dark-color dark:text-cream-light-color text-center mb-8">{about.description}</p>

        {whyChooseEmperic && (
                            <div className="mb-20px md:mb-10">
                              <h4 className="text-primary-color-light dark:text-white-color text-size-22 md:text-3xl font-bold">
                                {whyChooseEmpericTitle}
                              </h4>
                              <ul className="text-primary-color-light dark:text-white-color mt-4 mb-15px md:mb-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                              {whyChooseEmpericItems?.length
                              ? whyChooseEmpericItems.map((item, idx) => (
                             <li
                              key={idx}
                              className="pl-25px relative before:content-['\f00c'] before:font-fontawesome before:absolute before:left-0 before:top-0 before:text-primary-color before:font-bold">
                              <span className="text-primary-color-light dark:text-white-color font-bold">
                                  {item.title}
                              </span>
                              <p className="text-primary-color-light dark:text-white-color">
                                  {item.desc}
                              </p>
                            </li>
                           ))
                           : ""}
                            </ul>

                              <p className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">{whyChooseEmpericDesc}</p>

                            </div>
                          )}


<div className="bg-gradient-primary text-white text-center py-10 px-6 rounded-lg shadow-lg mt-20">
  <h2 className="text-2xl md:text-3xl font-bold mb-3">
    Ready to discuss your project?
  </h2>
  <p className="text-lg md:text-xl mb-5">
    Contact us today to explore how <span className="font-bold">EmpericTech</span> can elevate your business.
  </p>
  
  <Link
    href="/#contact"
    className="font-semibold text-lg py-3 px-6 rounded-full shadow-md bg-200 bg-gradient-secondary rounded shadow-lg z-50 transition-all duration-300 hover:bg-[-100%]"
  >
    Contact Us
  </Link>
</div>


        {/* Team Members */}
        <Teams1 />
      </section>
    </div>
  );
}
