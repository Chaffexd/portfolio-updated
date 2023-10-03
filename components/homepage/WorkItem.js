import Image from "next/image";

const WorkItem = ({ company, role, startDate, endDate }) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={"/images/me.jpeg"} width={30} height={30} />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dt className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dt>
        <dt className="sr-only">Role</dt>
        <dt className="text-xs text-zinc-500 dark:text-zinc-400">
          {role}
        </dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime="2023">{startDate}</time>
          <span>-</span>
          <time dateTime="2023">{endDate}</time>
        </dd>
      </dl>
    </li>
  );
};

export default WorkItem;
