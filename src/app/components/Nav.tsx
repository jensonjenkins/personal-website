"use client"

import Image from "next/image"
import Link from "next/link"
import TextLink from "./TextLink"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { CgDarkMode } from 'react-icons/cg'
import { BiLogoGmail } from 'react-icons/bi'

type NavProps = {
    onPropChange: (value: boolean) => void
}

const Nav= () => {

    let iconClass = "w-10 h-10 border rounded-full hover:bg-gray-100 transition hover:cursor-pointer"
    let linkClass = "text-lg font-semibold hover:text-sky-600 transition focus:underline focus:font-bold my-1 w-fit"

    return (
        <>
            <div className="relative flex flex-col h-700 w-1/3 p-6 pt-3">
                <div className="flex flex-row">
                    <div className="border w-18 h-18 rounded-full ">
                        <Image 
                        className="w-18 h-18 rounded-full"
                        src="/face.jpg" 
                        alt=""
                        width={72}
                        height={72}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="ml-3 mt-1.5 text-xl font-semibold">
                            Dave Gunawan
                        </p>
                        <p className="ml-3 my-1 text-gray-400">
                            IEM '26 {<TextLink name="@NTU" target="https://www.ntu.edu.sg/" blank={true}/>}.
                        </p>
                    </div>
                </div>

                <button className="w-full h-12 border rounded-lg my-4 hover:border-2 hover:border-sky-500 transition" >
                    <CgDarkMode size={30} className={`mx-auto`} />
                </button>

                <Link className={linkClass} href="/" >About</Link>
                <Link className={linkClass} href="/projects">Projects</Link>
                <Link className={linkClass} href="/resume">Resume</Link>

                <div className="absolute bottom-2">
                    <p className="text-gray-400 text-center">Dave Martheen Gunawan | Last Updated 02/08/2023 14:59:23 UTC</p>

                    <div className="flex flex-row w-full justify-center space-x-2 mt-4">
                        <a className={iconClass} href="dave.martheen@gmail.com" target="_blank"><BiLogoGmail className="m-auto my-1.5" size={26} color="#22262A" /></a>
                        <a className={iconClass} href="https://github.com/jensonjenkins" target="_blank"><FaGithub className="m-auto my-1.5" size={26} color="#22262A" /></a>
                        <a className={iconClass} href="https://www.linkedin.com/in/davegunawan" target="_blank"><FaLinkedinIn className="m-auto my-1.5" size={26} color="#22262A" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav