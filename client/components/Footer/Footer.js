import { Tooltip } from "@material-tailwind/react"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="">
            <footer className="mx-auto w-52 justify-center items-center">
            <Tooltip content="Click to know about the developer">
                <a
                    href="https://ankitkumar.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 my-2 hover:text-gray-700 mx-3 hover:text-green-700"
                >
                    Develped by Ankit Kumar{' '}
                    <span className="">
                        <Image src="/logo_rahbarindia.png" alt="Rahbar India Logo" width="200" height="34px" />
                    </span>
                </a>
                </Tooltip>
            </footer>
        </div>
    )
}

export default Footer