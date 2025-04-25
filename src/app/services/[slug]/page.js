import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getALlServices from "@/libs/getALlServices";
import { notFound } from "next/navigation";

// Dynamic Metadata function
export async function generateMetadata({ params }) {
  const { slug } = await params; // Get slug from URL params
  const services = getALlServices(); // Fetch all services

  const service = services.find((service) => service.slug === slug); // Find service by slug

  if (!service) {
    return {
      title: "Service Not Found - EmpericTech",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} - EmpericTech`, // Dynamic title
    description: service.description || "Learn more about this service.", // Dynamic description
  };
}

// Main service details page component
export default async function ServiceDetails({ params }) {
  const { slug } = await params; 

  const services = getALlServices(); // Fetch services
  if (!services) {
    notFound();
  }

  const service = services.find((service) => service.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <PageWrapper isInnerPage={true}>
      <ServiceDetailsMain service={service} />
    </PageWrapper>
  );
}

// Generate static paths
export async function generateStaticParams() {
  const services = getALlServices();
  if (!services || services.length === 0) {
    return [];
  }

  return services.map((service) => ({
    slug: service.slug,
  }));
}
