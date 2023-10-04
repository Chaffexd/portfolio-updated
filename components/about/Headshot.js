import Image from "next/image";
import React from "react";

const Headshot = () => {
  return (
    <div className="max-w-xs px-2.5 lg:max-w-none flex justify-center">
      <Image
        src={"/images/me.jpeg"}
        width={350}
        height={350}
        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        alt="A photo of Shane Chaffe"
      />
    </div>
  );
};

export default Headshot;
