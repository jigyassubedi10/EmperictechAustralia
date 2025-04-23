"use client";
import { createContext, useContext, useEffect, useState } from "react";

const WorkRenderContext = createContext(null);
const WorkRenderContextProvider = ({ children }) => {
  const [isWork, setIsWork] = useState(false);
  useEffect(() => {
    let work = document.querySelector("#work");
    const checkIsWork = setInterval(() => {
      work = document.querySelector("#work");
    }, 100);
    if (work) {
      clearInterval(checkIsWork);
      setIsWork(true);
    }
  }, []);

  return (
    <WorkRenderContext.Provider value={{ isWork }}>
      {children ? children : ""}
    </WorkRenderContext.Provider>
  );
};
export const useWorkRenderContext = () => {
  const value = useContext(WorkRenderContext);
  return value ? value?.isWork : null;
};
export default WorkRenderContextProvider;
