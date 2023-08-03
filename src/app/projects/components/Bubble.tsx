import TextLink from "@/app/components/TextLink"
import { LuExternalLink } from 'react-icons/lu'

type bubbleProps = {
    title: string,
    desc: string,
    link: string,
    skills: string[],
    date: string
}
const Bubble: React.FC<bubbleProps> = ({ title, desc, link, skills, date }) => {
    return (
        <>
            <div className="w-full h-auto border rounded-lg p-2 px-3 my-2 ">
                <div className="flex flex-row w-full relative">
                    <div className="text-lg font-semibold hover:cursor-pointer">
                        <TextLink name={title} target={`/projects/${title}`} blank={false} />

                        <p className="font-semibold text-sm mt-0.5 md:hidden md:opacity-0">{date}</p>
                    </div>

                    <p className="font-semibold text-sm absolute right-6 mt-0.5 max-md:hidden max-md:opacity-0">{date}</p>
                    <a href={link} target="_blank">
                        <LuExternalLink className=" box-content p-0.5 hover:bg-gray-200 rounded-md mt-0.5 absolute right-0 hover:cursor-pointer" />
                    </a>
                </div>
                <p className="text-sm mt-2">
                    {desc}
                </p>
                <div className="mt-2 flex flex-row max-sm:flex-col">
                    {skills && <>
                        {skills.map((skill, i) => i ?
                            <>
                                <p className="max-sm:hidden">&#x2022;</p>
                                <p className="mx-1 font-medium max-md:text-sm max-md:mt-0.5">{`${skill}`}</p>
                            </>
                            :
                            <>
                                <p className="font-semibold max-md:text-sm max-md:mt-0.5">Skills: </p>
                                <p className="mx-1 font-medium max-md:text-sm max-md:mt-0.5">{`${skill}`}</p>
                            </>)}
                    </>}
                </div>
            </div>
        </>
    )
}

export default Bubble