
import Image from "next/image"
import TextLink from "@/app/components/TextLink"
import { LuExternalLink } from "react-icons/lu"
import { Metadata } from "next"


export const metadata:Metadata= {
  title: 'Sudoku | Dave Gunawan',
  description: 'Personal Website',
}
const SudokuPage = () => {
    return (
        <>
            
            <div className="flex flex-row">

                <p className='font-bold text-3xl mb-3'>Sudoku</p>
                <a href="https://github.com/jensonjenkins/sudoku-game" target="_blank">
                    <LuExternalLink size={25} className="transition box-content p-0.5 hover:bg-gray-100 rounded-md ml-2 mt-1 hover:cursor-pointer" />
                </a>
            </div>

            <p className="font-semibold mt-1 text-lg">Description</p>
            <p className='mt-2 mb-1'><TextLink name="sudoku-game " target="https://github.com/jensonjenkins/sudoku-game" blank={true} />
                is a remake of the classic sudoku game written in
                <TextLink name=" Java " target="https://www.java.com/en/" blank={true} />
                with
                <TextLink
                    name=" Swing"
                    target="https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/javax/swing/package-summary.htmlhttps://www.java.com/en/" blank={true} />.</p>

            <div className="flex flex-row mt-3 p-2 mx-auto border rounded-lg">

                <Image
                    alt="java sudoku demo"
                    src="/sudoku1.jpg?timestamp=123"
                    width={400}
                    height={400} />
            </div>
            <p className="italic text-gray-400 text-center font-light text-sm my-1">
                <TextLink name="sudoku" target="https://github.com/jensonjenkins/sudoku-game" blank={true} /> on Windows Desktop</p>

            <p className="font-semibold mt-4  text-lg">Technology and Tools</p>

            <p className="mt-1 ">&nbsp;&nbsp;&#x2022; Written in <TextLink name="Java" target="https://www.java.com/en/" blank={true} />
                , utilizing the
                <TextLink
                    name=" Swing"
                    target="https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/javax/swing/package-summary.htmlhttps://www.java.com/en/" blank={true} /> GUI library.</p>
        </>
    )
}

export default SudokuPage