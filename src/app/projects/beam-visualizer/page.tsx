import Image from "next/image"
import TextLink from "@/app/components/TextLink"


const BeamPage = () => {
    return (
        <>
            <p className='font-bold text-3xl mb-3'>beam-visualizer</p>

            <p className="font-semibold mt-1 text-lg">Description</p>
            <p className='mt-2 mb-1'><TextLink name="beam-visualizer " target="https://github.com/jensonjenkins/beam-visualizer" blank={true} />
                is a force & moment graph visualizer written using the <TextLink name=" Turtle " target="https://docs.python.org/3/library/turtle.html" blank={true} /> library. </p>
            <p className="mt-1 mb-3">It takes the positions and magnitudes of the forces on a beam, then outputs a graph to visualize said forces and graphs.</p>

            <div className="flex flex-row mt-3 p-2 mx-auto border rounded-lg">
                <Image
                    alt="transformer-chatbot demo"
                    src="/pyvi1.png"
                    width={465}
                    height={700} />
            </div>
            <p className="italic text-gray-400 text-center font-light text-sm my-1">Real example generated by
                <TextLink name=" beam-visualizer" target="https://github.com/jensonjenkins/beam-visualizer" blank={true} /> </p>

            <p className="font-semibold mt-4  text-lg">Technology and Tools</p>

            <p className="mt-1">&nbsp;&nbsp;&#x2022; Written in Python, utilizing the
                <TextLink name=" Turtle " target="https://docs.python.org/3/library/turtle.html" blank={true} /> library</p>
            <p className="mt-1">&nbsp;&nbsp;&#x2022; Utilizes a custom
                <TextLink
                    name=" numerical integration"
                    target="https://mathworld.wolfram.com/NumericalIntegration.html#:~:text=Numerical%20integration%20is%20the%20
                    approximate,integral%20is%20sometimes%20called%20quadrature." 
                    blank={true}/> function for each graph</p>
        </>
    )
}

export default BeamPage