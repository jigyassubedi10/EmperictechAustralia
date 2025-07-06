import blogs from "../../public/fakedata/blogs"; // or wherever your blogs.json is

const getBlogCategories = () => {
  // Extract categories from all blogs
  const categories = blogs.reduce((acc, blog) => {
    if (blog.category && !acc.includes(blog.category)) {
      acc.push(blog.category);
    }
    return acc;
  }, []);

  return categories;
};

export default getBlogCategories;

