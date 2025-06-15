"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import WorkBreadCarumb from "@/components/sections/heros/WorkBreadCarumb";
import WorkDetailsPrimary from "@/components/sections/work-details/WorkDetailsPrimary";
import getAWork from "@/libs/getAWork";

const WorkdetailsMain = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      if (id) {
        const result = await getAWork(id);
        console.log("Fetched work:", result);  // Debug
        setWork(result);
      }
    };
    fetchWork();
  }, [id]);

  // Adjust here if your data is nested
  const title = work?.title || work?.data?.title || "Work Details";

  return (
    <main>
      <WorkBreadCarumb
        title={title}
        text={title}
        actualItem="Works"
        path="/#works"
      />
      <WorkDetailsPrimary work={work} />
    </main>
  );
};

export default WorkdetailsMain;