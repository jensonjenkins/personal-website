import Image from "next/image"
import TextLink from "@/app/components/TextLink"
import { Metadata } from "next"
import { LuExternalLink } from "react-icons/lu"

export const metadata:Metadata= {
  title: 'chatbot-web | Dave Gunawan',
  description: 'Personal Website',
}
const ChatbotPage = () => {
    return (
        <>
            
            <div className="flex flex-row">

                <p className='font-bold text-3xl mb-3'>chatbot-web</p>
                <a href="https://github.com/jensonjenkins/chatbot-web" target="_blank">
                    <LuExternalLink size={25} className="transition  box-content p-0.5 hover:bg-gray-100 rounded-md ml-2 mt-1 hover:cursor-pointer" />
                </a>
            </div>

            <p className="font-semibold mt-1 text-lg">Description</p>
            <p className='mt-2 mb-1'>
                <TextLink name="chatbot-web " target="https://github.com/jensonjenkins/chatbot-web" blank={true} /> is an interactive platform designed to interact with the 
                <TextLink name=" transformer-chatbot " target="https://github.com/jensonjenkins/transformer-chatbot" blank={true} /> model, since interacting with the console
                isn't exactly a user-friendly experience.
                </p>
          
            <div className="flex flex-row mt-3 p-2 border rounded-lg">

                <Image
                    alt="transformer-chatbot demo"
                    src="/personal-website/chatbot-web1.jpg"
                    width={700}
                    height={465} />
            </div>
            <p className="italic text-gray-400 text-center font-light text-sm my-1">A demo of
                <TextLink name=" chatbot-web" target="https://github.com/jensonjenkins/chatbot-web" blank={true} /> </p>

            <p className="font-semibold mt-4  text-lg">Technology and Tools</p>

            <p className="mt-1 ">&nbsp;&nbsp;&#x2022; The Frontend was built using <TextLink name="React" target="https://react.dev/" blank={true}/>, written in Typescript.</p>
            <p className="mt-1">&nbsp;&nbsp;&#x2022; <TextLink name="Django" target="https://www.djangoproject.com/" blank={true}/> acts as a REST API to connect the Python model and the frontend</p>
            <p className="mt-1">&nbsp;&nbsp;&#x2022; Containerized in <TextLink name="Docker" target="https://www.docker.com/" blank={true}/> to operate on local machines</p>
        </>
    )
}

export default ChatbotPage