import Work from "../icons/Work";
import WorkItem from "./WorkItem";

const WorkExperience = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Work />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <WorkItem
          company={"Contentful"}
          role={"Customer Support Engineer"}
          startDate={"2023"}
          endDate={"Present"}
        />
        <WorkItem
          company={"Sauce Labs"}
          role={"Customer Support Engineer"}
          startDate={"2022"}
          endDate={"2023"}
        />
        <WorkItem
          company={"OneTrust"}
          role={"Customer Support Engineer"}
          startDate={"2021"}
          endDate={"2022"}
        />
        <WorkItem
          company={"Apple"}
          role={"Genius"}
          startDate={"2017"}
          endDate={"2021"}
        />
      </ol>
    </div>
  );
};

export default WorkExperience;
