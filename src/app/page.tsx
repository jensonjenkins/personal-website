import TextLink from './components/TextLink'
import Bubble from './projects/components/Bubble'
import { Metadata } from "next"
import Footer from './components/Footer'
export const metadata: Metadata = {
  title: 'About | Dave Gunawan',
  description: 'Personal Website',
}


export default function Home() {

  return (
    <>
        <p className={`font-bold text-3xl`}>About me</p>
        <p className='my-3 '>Hi there! I'm Dave, currently a sophomore Information Engineering and Media
          &#40;IEM&#41; student in NTU, Singapore. I am generally interested in things related to maths, software development,
          and, as of recently, machine learning and AI. I've really taken a liking to building and training models.</p>
        <p className='my-3 '>  Here are some of the projects I've worked on: </p>

        <Bubble
          title='SRGAN'
          desc='A Super Resolution GAN based on the SRGAN architecture from the 2016 paper, 
        "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network" by C. Ledig et al.'
          link="https://github.com/jensonjenkins/SRGAN"
          date="30 July 2023"
          skills={[]} />

        <Bubble
          title='transformer-chatbot'
          desc='An encoder-decoder transformer modelled chatbot based on the 2017 paper 
        "Attention is All You Need" by A. Vaswani et al. made in TensorFlow.'
          link="https://github.com/jensonjenkins/transformer-chatbot"
          date="20 June 2023"
          skills={[]} />

        <p className='my-3 '>
          If you're interested, you can check more of them out on the
          <TextLink name=" Projects " target='/projects' blank={false} />
          page.
        </p>

        <p className='mt-3'>This website is built in

          <TextLink name=' Next.js 13' target="https://nextjs.org/docs" blank={true} />,
          written with
          <TextLink name=' Typescript' target='https://www.typescriptlang.org/' blank={true} /> and
          <TextLink name=' Tailwind' target='https://www.tailwindcss.com/' blank={true} />.
        </p>
    </>
  )
}
