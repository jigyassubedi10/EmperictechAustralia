import DisclaimerBreadcarumb from "@/components/sections/disclaimer/DisclaimerBreadcarumb";
import getAllDisclaimer from "@/libs/getAllDisclaimer";
import Link from "next/link";

export default function Disclaimer() {
  const disclaimer = getAllDisclaimer();
  const { title, description, sections } = disclaimer || {};

  return (
    <div>
      {/* Breadcrumb */}
      <DisclaimerBreadcarumb />

      {/* Disclaimer Section */}
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl text-primary-color-light dark:text-white-color font-bold text-center mt-8 mb-6">
          {title}
        </h1>
        <p className="text-lg text-dark-color dark:text-cream-light-color text-left mb-8">
          {description}
        </p>

        {/* Disclaimer Sections */}
        {sections && sections.length > 0 && (
          <div className="mb-20px md:mb-10 space-y-6">
            {sections.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-dark-color rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl md:text-2xl font-bold text-primary-color-light dark:text-white-color mb-3">
                  {item.title}
                </h2>
                <p className="text-primary-color-light dark:text-white-color">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Contact Us CTA */}
        <div className="bg-gradient-primary text-white text-center py-10 px-6 rounded-lg shadow-lg mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Have questions about our disclaimer?
          </h2>
          <p className="text-lg md:text-xl mb-5">
            Contact us today and let us guide you through our policies.
          </p>
          <Link
            href="/#contact"
            className="font-semibold text-lg py-3 px-6 rounded-full shadow-md bg-200 bg-gradient-secondary rounded shadow-lg z-50 transition-all duration-300 hover:bg-[-100%]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
