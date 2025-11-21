import HeroBreadcarumb from "@/components/sections/heros/HeroBreadcarumb";
import WorkCard from "@/components/shared/cards/WorkCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getWork from "@/libs/getWork";
import Link from "next/link";

export const metadata = {
  title: "Our Works | EmpericTech | Portfolio & Case Studies",
  description:
    "Explore EmpericTech’s portfolio – websites, branding, cloud implementations, digital marketing and IT projects delivered for clients worldwide.",
  keywords: [
    "IT portfolio",
    "website portfolio",
    "case studies",
    "IT projects",
    "EmpericTech works",
  ],
};

const WorksPage = async () => {
  const works = await getWork();

  return (
    <PageWrapper isInnerPage={true}>
      {/* Hero Breadcrumb */}
      <HeroBreadcarumb
        title="Our Works"
        text="Explore our recent projects"
        actualItem="Works"
        path="/works"
      />

      {/* Works Section */}
      <section id="works">
        <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-30">
          <div className="container">

            {/* Works Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {works?.map((work, idx) => (
                <div key={idx} className="relative">
                  <WorkCard works={work} />
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-primary text-white text-center py-10 px-6 rounded-lg shadow-lg mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Want to build something amazing?
              </h2>

              <p className="text-lg md:text-xl mb-5">
                Let <span className="font-bold">EmpericTech</span> help bring your vision to life.
              </p>

              <Link
                href="/#contact"
                className="font-semibold text-lg py-3 px-6 rounded-full shadow-md bg-200 bg-gradient-secondary transition-all duration-300 hover:bg-[-100%]"
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

export default WorksPage;
