import Bubble from "./components/Bubble"
import { Metadata } from "next"


export const metadata:Metadata= {
  title: 'Projects | Dave Gunawan',
  description: 'Personal Website',
}

const Projects = () => {

    return (
        <>
            <p className='font-bold text-3xl mb-3'>My Projects</p>

            <Bubble
                title='SRGAN'
                desc='An image enhancing GAN based on the SRGAN architecture from the paper, 
            "Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network" by C. Ledig et al.'
                link="https://github.com/jensonjenkins/SRGAN"
                date="30 July 2023"
                skills={["Tensorflow", "Python", "Machine Learning"]} />

            <Bubble
                title='transformer-chatbot'
                desc='An encoder-decoder transformer modelled chatbot based on the 2017 paper 
            "Attention is All You Need" by A. Vaswani et al. made in TensorFlow.'
                link="https://github.com/jensonjenkins/transformer-chatbot" 
                date="20 June 2023"
                skills={["Tensorflow", "Docker", "Python", "Machine Learning"]}/>

            <Bubble
                title='chatbot-web'
                desc="A full-stack web app to interact with the transformer-chatbot model."
                link="https://github.com/jensonjenkins/chatbot-web"
                date="8 July 2023"
                skills={["Typescript", "Django", "Docker", "Tensorflow", "Linux"]} />

            <Bubble title='beam-visualizer' 
            desc='Force & moment graph visualizer for a beam system.'
                link="https://github.com/jensonjenkins/beam-visualizer"
                date="20 November 2022"
                skills={["Python"]} />

            <Bubble title='sudoku' 
            desc='A version of the classic Sudoku game.'
                link="https://github.com/jensonjenkins/sudoku-game"
                date="11 April 2023"
                skills={["Java", "Swing"]} />

        </>
    )
}

export default Projects