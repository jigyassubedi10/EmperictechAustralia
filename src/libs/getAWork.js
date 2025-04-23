import getWork from "./getWork";

const getAWork = (currentId) => {
  const works1 = getWork();
  const works = works1?.find(({ id }) => parseInt(currentId) === id);

  return works || {};
};

export default getAWork;
