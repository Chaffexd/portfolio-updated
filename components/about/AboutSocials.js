import Link from "next/link"
import GitHubIcon from "../icons/GitHub"
import LinkedInIcon from "../icons/LinkedIn"
import MailIcon from "../icons/MailIcon"
import FrontEndMentor from "../icons/FrontEndMentor"

const AboutSocials = () => {
  return (
    <ul role="list">
        <li className="flex flex-col h-6">
            <Link href={"https://github.com/Chaffexd"} target="_blank" aria-label="Github" className="flex items-center mb-4 text-sm font-medium transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <GitHubIcon />
                <p className="ml-4 w-22 mb-0 dark:text-white text-zinc-600 hover:text-teal-500 dark:hover:text-teal-500">Follow me on GitHub</p>
            </Link>
            <Link href={"https://www.linkedin.com/in/shane-chaffe/"} target="_blank" aria-label="LinkedIn" className="flex mb-4 items-center text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <LinkedInIcon />
                <p className="ml-4 w-22 mb-0 dark:text-white text-zinc-600 text-zinc-600 hover:text-teal-500 dark:hover:text-teal-500">Follow me on GitHub</p>
            </Link>
            <Link href={"https://www.frontendmentor.io/profile/Chaffexd"} target="_blank" aria-label="FrontEnd Mentor" className="flex items-center text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <FrontEndMentor />
                <p className="ml-4 w-22 mb-0 dark:text-white text-zinc-600 text-zinc-600 hover:text-teal-500 dark:hover:text-teal-500">Follow me on FE Mentor</p>
            </Link>
        </li>
        <li className="mt-14 pt-8 dark:border-zinc-700/40 flex">
            <a href="mailto:shanechaffe@gmail.com" aria-label="Email" className="group border-t border-zinc-100 pt-4 flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                <MailIcon />
                <span className="ml-4 mb-0">shanechaffe@gmail.com</span>
            </a>
        </li>

    </ul>
  )
}

export default AboutSocials