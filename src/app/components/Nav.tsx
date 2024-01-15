"use client"

import Image from "next/image"
import Link from "next/link"
import TextLink from "./TextLink"
import { CgDarkMode } from 'react-icons/cg'
import { useTheme } from 'next-themes'
import Footer from "./Footer"


const Nav = () => {
    const { resolvedTheme, setTheme } = useTheme()
    let linkClass = `text-lg font-semibold hover:text-sky-600  my-1 
                        w-fit max-md:mr-3`

    return (
        <>
            <div className="relative flex flex-col max-md:h-56 h-700 w-1/3 max-md:w-full p-6 pt-3">
                <div className="flex flex-row">
                    <div className=" w-18 h-18 rounded-full ">
                        <Image
                            className="w-18 h-18 rounded-full"
                            src="/personal-website/face.jpg"
                            alt=""
                            width={72}
                            height={72} />
                    </div>
                    <div className="flex flex-col">
                        <Link href="/" className={`ml-3 mt-1.5 text-xl font-semibold hover:text-sky-700`}>
                            Dave Gunawan
                        </Link>
                        <p className="ml-3 my-1 text-gray-400">
                            IEM '26 {<TextLink name="@NTU" target="https://www.ntu.edu.sg/" blank={true} />}.
                        </p>
                    </div>
                </div>

                <button type="button" onClick={() => { setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') }} className="w-full h-12 border rounded-lg my-4 hover:border-2 hover:border-sky-500 transition" >
                    <CgDarkMode size={30} color={`${resolvedTheme === 'dark' ? "white" : ""}`} className={`mx-auto transition transform duration-700 ${resolvedTheme === 'dark' ? "rotate-180" : "-rotate-180"}`} />
                </button>
                <div className="flex flex-col max-md:flex-row ">

                    <Link className={linkClass} href="/" >About</Link>
                    <Link className={linkClass} href="/projects">Projects</Link>
{/*                     <a className={linkClass} href="/personal-website/resume.pdf" target="_blank">Resume</a> */}

                </div>
                <Footer classProps=" absolute bottom-2 max-md:opacity-0 max-md:hidden"/>
            </div>
        </>
    )
}

export default Nav
