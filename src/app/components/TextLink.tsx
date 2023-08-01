
type TextLinkProps = {
    name: string,
    target: string,
    blank:boolean
}
const TextLink:React.FC<TextLinkProps>= ({name, target, blank})=>{
    return (
        <>
            <a className="text-md font-semibold text-sky-600 hover:text-sky-400 transition" 
            href={target} target={`${blank?"_blank":""}`}>{`${name}`}</a>
        </>
    )

}
export default TextLink