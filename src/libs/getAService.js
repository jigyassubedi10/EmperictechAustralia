import getALlServices from "./getALlServices";

const getAService = (slug) => {
  const services = getALlServices();
  const service = services?.find(service => service.slug === slug);  // Use slug here
  return service || {}; // Return the service or an empty object
};

export default getAService;
