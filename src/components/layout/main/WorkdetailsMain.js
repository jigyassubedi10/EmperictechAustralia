"use client";
import WorkBreadCarumb from "@/components/sections/heros/WorkBreadCarumb";
import WorkDetailsPrimary from "@/components/sections/work-details/WorkDetailsPrimary";
import getAWork from "@/libs/getAWork";

import { useParams } from "next/navigation";
const WorkdetailsMain = () => {
  const params = useParams();
  const works = getAWork(params?.id);
  const { title } = works || {};
  return (
    <main>
      <WorkBreadCarumb
        title={title ? title : "portfolio Details"}
        text={title ? title : "portfolio Details"}
        actualItem={"Works"}
        path="/#works"
      />
      <WorkDetailsPrimary />
    </main>
  );
};

export default WorkdetailsMain;
