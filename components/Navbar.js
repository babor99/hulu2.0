import requests from "../utils/requests"
import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter()
    const genre = router?.query?.genre

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 whitespace-nowrap sm:text-xl space-x-10 sm:space-x-20 
            overflow-x-scroll scrollbar-hide"
            >
                {
                    Object.entries(requests).map(([key, { title, url }]) => (
                        <h3
                            onClick={ () => router.push(`/?genre=${key}`)}
                            className={`last:pr-20 cursor-pointer transition duration-100 transform hover:scale-125 
                            text-white hover:text-red-300 active:text-red-500 ${genre === key ? 'text-red-500':''}`} 
                            key={key}
                        >
                            {title}
                        </h3>
                    ))
                }
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
        </nav>
    )
}