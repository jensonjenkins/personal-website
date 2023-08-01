import TextLink from "@/app/components/TextLink"
import { LuExternalLink } from 'react-icons/lu'

type bubbleProps = {
    title: string,
    desc: string,
    link: string,
    skills: string[]
}
const Bubble: React.FC<bubbleProps> = ({ title, desc, link, skills }) => {
    return (
        <>
            <div className="w-full h-auto border rounded-lg p-2 px-3 my-2 ">
                <div className="flex flex-row w-full relative">
                    <a className="text-lg font-semibold hover:cursor-pointer">
                        <TextLink name={title} target={`/projects/${title}`} blank={false} />
                    </a>
                    <a href={link} target="_blank">
                        <LuExternalLink className="mt-0.5 absolute right-0 hover:cursor-pointer" />
                    </a>
                </div>
                <p className="text-sm mt-2">
                    {desc}
                </p>
                <div className="mt-2 flex flex-row">
                    {skills && <>
                        {skills.map((skill, i) => i ? 
                        <>&#x2022;<p className="mx-1 font-medium">{skill}</p></> : 
                        <><p className="font-semibold">Skills: </p><p className="mx-1 font-medium">{skill}</p></>)}
                    </>}
                </div>
            </div>
        </>
    )
}

export default Bubble