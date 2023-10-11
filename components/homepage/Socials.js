import Link from "next/link";
import GitHubIcon from "../icons/GitHub";
import LinkedInIcon from "../icons/LinkedIn";

const Socials = () => {
  return (
    <>
      <Link
        href={"https://www.linkedin.com/in/shane-chaffe/"}
        target="_blank"
        className="w-8 fill-zinc-500 hover:fill-zinc-600"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </Link>
      <Link
        href={"https://github.com/Chaffexd"}
        target="_blank"
        className="w-8 fill-zinc-500 transition hover:fill-zinc-600"
        aria-label="Github"
      >
        <GitHubIcon />
      </Link>
    </>
  );
};

export default Socials;
