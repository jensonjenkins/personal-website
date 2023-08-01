"use client"
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

const Directory = () => {
    const router = usePathname().split('/').slice(1)

    return (
        <>
            <div className="flex flex-row mb-3">
                {router.map((part, index) => <>
                    <FiChevronRight className="" size={26} />
                    <Link href={`/${part}`} className='font-medium'>{part}</Link>
                </>
                )}
            </div>
        </>
    )
}

export default Directory