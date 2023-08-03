import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

type FooterProps={
    classProps:string
}
const Footer = ({classProps}:FooterProps) => {

    let iconClass = `w-10 h-10 border rounded-full hover:bg-gray-100 
                        hover:cursor-pointer dark:hover:bg-zinc-800`
    return (

            <div className={` pr-5`+classProps}>
                <p className="mt-48 text-gray-400 mx-auto text-center">Dave Martheen Gunawan | Last updated on 02/08/2023, at 14:59:23 UTC</p>

                <div className="flex flex-row w-full justify-center space-x-2 mt-4">
                    <a className={iconClass} href="mailto:dave.martheen@gmail.com" target="_blank">
                        <BiLogoGmail className="m-auto my-1.5" size={26} color="#9CA3AF" />
                    </a>
                    <a className={iconClass} href="https://github.com/jensonjenkins" target="_blank">
                        <FaGithub className="m-auto my-1.5" size={26} color="#9CA3AF" />
                    </a>
                    <a className={iconClass} href="https://www.linkedin.com/in/davegunawan" target="_blank">
                        <FaLinkedinIn className="m-auto my-1.5" size={26} color="#9CA3AF" />
                    </a>
                </div>
            </div>
    
    )
}

export default Footer
