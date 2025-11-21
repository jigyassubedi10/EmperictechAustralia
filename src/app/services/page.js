
import HeroBreadcarumb from "@/components/sections/heros/HeroBreadcarumb";
import ServiceCard from "@/components/shared/cards/ServiceCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getALlServices from "@/libs/getALlServices";
import Link from "next/link";


export const metadata = {
  title: "Services | Emperictech | Web Development, Cloud Services, IT/Tech Support, Digital Marketing",
  description:
    "Explore EmpericTech’s full range of services including custom web development, cloud migration, managed IT services, and cybersecurity. Tailored for SMEs and enterprises.",
  keywords: [
    "IT services Australia",
    "web development services",
    "cloud solutions Melbourne",
    "managed IT support",
  ],
};

const ServicesPage = () => {
  const services = getALlServices();

  return (
    <PageWrapper isInnerPage={true}>
      {/* Hero Breadcrumb */}
      <HeroBreadcarumb
        title="Our Services"
        text="Explore all the services"
        actualItem="Services"
        path="/services"
      />

      {/* Services Section */}
      <section id="services">
        <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-30">
          <div className="container">
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
  {services?.map((service, idx) => (
    <div key={idx} className="relative">
      <ServiceCard service={service} />
    </div>
  ))}
</div>


            {/* CTA Section */}
            <div className="bg-gradient-primary text-white text-center py-10 px-6 rounded-lg shadow-lg mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                 Ready to transform your business?
              </h2>
              <p className="text-lg md:text-xl mb-5">
                Contact us today to explore how{" "}
                <span className="font-bold">EmpericTech</span> can elevate your business.
              </p>

              <Link
                href="/#contact"
                className="font-semibold text-lg py-3 px-6 rounded-full shadow-md bg-200 bg-gradient-secondary rounded shadow-lg z-50 transition-all duration-300 hover:bg-[-100%]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ServicesPage;
