import getWork from "./getWork";

const getAWork = (currentId) => {
  const works1 = getWork();
  const works = works1?.find(({ id }) => currentId === id); // no parseInt!

  return works || {};
};

export default getAWork;