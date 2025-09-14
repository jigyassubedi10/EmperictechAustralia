import TermsAgreementBreadcarumb from "@/components/sections/terms-agreement/TermsAgreementBreadcarumb";
import getAllTermsAgreement from "@/libs/getAllTermsAgreement";
import Link from "next/link";

export default function TermsAgreement() {
  const termsData = getAllTermsAgreement();
  const { title, description, sections } = termsData || {};

  return (
    <div>
      {/* Breadcrumb */}
      <TermsAgreementBreadcarumb />

      {/* Terms & Agreement Section */}
      <section className="container mx-auto py-16 px-6">
        <h1 className="text-4xl text-primary-color-light dark:text-white-color font-bold text-center mt-8 mb-6">
          {title}
        </h1>
        <p className="text-lg text-dark-color dark:text-cream-light-color text-left mb-8">
          {description}
        </p>

        {/* Terms Sections */}
        {sections && sections.length > 0 && (
          <div className="space-y-8">
            {sections.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-dark-color rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl md:text-2xl font-bold text-primary-color-light dark:text-white-color mb-3">
                  {item.heading}
                </h2>

                {item.content && (
                  <p className="text-primary-color-light dark:text-white-color leading-relaxed">
                    {item.content}
                  </p>
                )}

                {item.list && item.list.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-primary-color-light dark:text-white-color">
                    {item.list.map((listItem, listIdx) => (
                      <li key={listIdx}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Contact Us CTA */}
        <div className="bg-gradient-primary text-white text-center py-10 px-6 rounded-lg shadow-lg mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Have questions about these Terms?
          </h2>
          <p className="text-lg md:text-xl mb-5">
            Contact us today and let us guide you through our service policies.
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
