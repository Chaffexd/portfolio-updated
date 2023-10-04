import Link from "next/link"
import GitHubIcon from "../icons/GitHub"
import LinkedInIcon from "../icons/LinkedIn"
import MailIcon from "../icons/MailIcon"

const AboutSocials = () => {
  return (
    <ul role="list">
        <li className="flex flex-col h-6">
            <Link href={"https://github.com/Chaffexd"} target="_blank" className="flex items-center mb-4 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <GitHubIcon />
                <p className="ml-4 w-22">Follow me on GitHub</p>
            </Link>
            <Link href={"https://www.linkedin.com/in/shane-chaffe/"} target="_blank" className="flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <LinkedInIcon />
                <p className="ml-4 w-22">Follow me on GitHub</p>
            </Link>
        </li>
        <li className="mt-14 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <a href="mailto:shanechaffe@gmail.com" className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <MailIcon />
                <span className="ml-4">shanechaffe@gmail.com</span>
            </a>
        </li>

    </ul>
  )
}

export default AboutSocials