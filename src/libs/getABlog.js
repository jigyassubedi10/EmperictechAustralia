import getBlogs from "./getBlogs";

const getABlog = (slug) => {
  const allBlogs = getBlogs();
  const blog = allBlogs?.find((b) => b.slug === slug);
  return blog || null;
};

export default getABlog;
