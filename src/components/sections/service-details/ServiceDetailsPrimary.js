"use client";

import ServiceSidebar from "@/components/shared/sidebar/ServiceSidebar";
import getAService from "@/libs/getAService";
import Image from "next/image";
import { useParams } from "next/navigation";

const ServiceDetailsPrimary = () => {
  const params = useParams();  // Getting params from URL
  console.log(params);
  const slug = params?.slug;  // Getting slug (e.g., "web-development")
  
  const service = getAService(slug);  // Fetching service by slug
  const { title, desc, img, servicesInclude, whyChooseUs } = service || {};

  const {
    title: servicesIncludeTitle,
    desc: servicesIncludeDesc,
    items: servicesItems
  } = servicesInclude || {};

  const {
    title: whyChooseUsTitle,
    desc: whyChooseUsDesc,
    items: whyChooseUsItems
  } = whyChooseUs || {};

  return (
    <section>
      <div className="py-60px md:py-20 lg:py-100px xl:py-30 dark:bg-black-color">
        <div className="container">
          <div className="lg:grid lg:gap-6 lg:grid-cols-12">
            {/* <!-- service details --> */}
            <div className="lg:col-start-1 lg:col-span-8">
              <div
                className="group relative flex flex-col items-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="rounded-lg relative overflow-hidden">
                  {/* <div className="rounded-t-lg overflow-hidden">
                    <Image src={img} alt="" width={2000} height={20000} />
                  </div> */}

                  <div className="pt-30px md:pt-10">
                    <div className="transition-all duration-500">
                      <div className="relative z-0">
                        <div className="relative z-10">
                          <h3 className="mb-15px md:mb-5">
                            <span className="text-primary-color-light dark:text-white-color capitalize relative z-0 text-size-35 md:text-size-40 lg:text-size-45 font-bold">
                              {title}
                            </span>
                          </h3>

                          <p className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">
                            {desc}
                          </p>

                          {/* <!-- Services Include --> */}
                          {servicesInclude && (
                            <div className="mb-20px md:mb-10">
                              <h4 className="text-primary-color-light dark:text-white-color text-size-22 md:text-3xl font-bold">
                                {servicesIncludeTitle}
                              </h4>
                              <p className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">{servicesIncludeDesc}</p>
                              <ul className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">
                                {servicesItems?.length
                                  ? servicesItems?.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="pl-25px mb-10px relative before:content-['\f00c'] before:font-fontawesome before:absolute before:left-0 before:top-0 before:text-primary-color before:font-bold">
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
                            </div>
                          )}

                          {/* <!-- Why Choose Us --> */}
                          {whyChooseUs && (
                            <div className="mb-20px md:mb-10">
                              <h4 className="text-primary-color-light dark:text-white-color text-size-22 md:text-3xl font-bold">
                                {whyChooseUsTitle}
                              </h4>
                              <p className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">{whyChooseUsDesc}</p>
                              <ul className="text-primary-color-light dark:text-white-color mb-15px md:mb-5">
                                {whyChooseUsItems?.length
                                  ? whyChooseUsItems.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="pl-25px mb-10px relative before:content-['\f00c'] before:font-fontawesome before:absolute before:left-0 before:top-0 before:text-primary-color before:font-bold">
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
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sidebar --> */}
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPrimary;
