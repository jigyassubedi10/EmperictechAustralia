import Link from "next/link";

const AboutBreadcrumb = () => {
  return (
    <section>
      <div className="hero-breadcrumb pt-150px md:pt-40 lg:pt-200px pb-50px md:pb-60px lg:pb-100px bg-[url('/img/about/about.jpg')] bg-cover bg-center bg-no-repeat relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary-color-light after:-z-1 after:opacity-70">
        <div className="container">
          <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45  bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">

              About Us
            </h1>
            {/* <!-- breadcrumbs --> */}
            <ul className="nav flex flex-wrap justify-center items-center gap-x-3">
              <li className="nav_item group relative">
                <Link
                  href="/"
                  className="font-medium text-white-color capitalize relative z-0 after:w-0 after:h-1px after:bg-white-color after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-500 group-hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="nav_item group relative">
                <p className="font-medium text-white-color capitalize relative flex items-center gap-10px">
                  <i className="fa-regular fa-greater-than text-xs"></i>
                </p>
              </li>
              <li className="nav_item group relative">
                <p className="font-medium text-white-color capitalize relative flex items-center gap-10px">
                  About
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBreadcrumb;
