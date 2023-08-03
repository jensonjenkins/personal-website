"use client"
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

const Directory = () => {
    const router = usePathname().split('/').slice(2)

    return (
        <>
            <div className="flex flex-row mb-3">
                {router.map((part, i) => i !== router.length - 1 ?
                    <>
                        <FiChevronRight key={i} className="" size={26} />
                        <Link href={`/${part}`} key={i+100} className='font-medium hover:underline'>{part}</Link>
                    </>
                    :
                    <>
                        <FiChevronRight key={i} className="" size={26} />
                        <p key={i+100} className='font-medium'>{part}</p>
                </>
                )}
        </div >
        </>
    )
}

export default Directory