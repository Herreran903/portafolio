import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { HiCode } from "react-icons/hi";

import { SiGithub } from "react-icons/si";
import { SiGitlab } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const sections = [
    {
        title: "Home",
        icon: HiHome,
        href: "/"
    },
    {
        title: "Education",
        icon: HiAcademicCap,
        href: "/"
    },
    {
        title: "Experience",
        icon: HiBriefcase,
        href: "/"
    },
    {
        title: "Projects",
        icon: HiCode,
        href: "/"
    }
];

const socialMedia = [
    {
        title: "GitHub",
        icon: SiGithub,
        href: "https://github.com/Herreran903"
    },
    {
        title: "GitLab",
        icon: SiGitlab,
        href: "https://gitlab.com/Herreran"
    },
    {
        title: "LinkedIn",
        icon: SiLinkedin,
        href: "https://www.linkedin.com/in/nicolas-herrera-001231286/"
    },
    {
        title: "Gmail",
        icon: SiGmail,
        href: "mailto:herreran903@gmail.com"
    }
];

const socialMediaList = socialMedia.map((socialMedia) => (
    <li key={socialMedia.title}>
        <Link href={socialMedia.href}>
            <socialMedia.icon className="text-gray-500 hover:text-white size-4"/>
        </Link>
    </li>
));

const sectionsList = sections.map((section) => (
    <li key={section.title}>
        <Link href={section.href}>
            <section.icon className="text-gray-300 hover:text-white size-7"/>
        </Link>
    </li>
));

export default function NavBar() {
    return (
        <aside className="hidden sm:flex flex-col justify-between bg-[#202020] h-full">
            <div className="p-4 bg-[#cb7731]">
                <h2 className="text-center text-white text-3xl font-bold">N</h2>
            </div>
            <div className="p-4">
                <ul className="flex flex-col gap-10 mt-4 items-center">
                    {sectionsList}
                </ul>
            </div>
            <div className="p-4">
                <ul className="flex flex-col gap-4 mt-4 items-center">
                    {socialMediaList}
                </ul>
            </div>
        </aside>
    );
}