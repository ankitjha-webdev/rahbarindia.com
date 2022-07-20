import { Navbar, Button, Typography, Avatar } from "@material-tailwind/react";
import Image from "next/image";
import Link from 'next/link'
export default function Header() {
    const icon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-75"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl shadow-md shadow-green-400 hidden md:block">
            <div className="container flex items-center justify-between text-blue-grey-900 ">
                <Image
                    src="https://github.com/ankitjha-webdev/rahbarindia.com/blob/'main'/client/public/logo_rahbarindia.png"
                    alt="Landscape picture"
                    width={200}
                    height={40}
                    className="cursor-pointer font-normal"
                />
                <ul className="flex items-center gap-6">
                    <Typography as="li" variant="small" className="active md:p-1 font-semibold cursor-pointer">

                        <Link href="/"><a className="flex items-center hover:text-green-600" >Home&nbsp;</a></Link>
                    </Typography>
                    <Typography as="li" variant="small" className="md:p-1 font-normal cursor-pointer">
                        <Link href="/service"><a className="flex items-center  hover:text-green-600">Service&nbsp;</a></Link>
                    </Typography>
                    <Typography as="li" variant="small" className="md:p-1 font-normal cursor-pointer">
                        <Link href="/about"><a className="flex items-center hover:text-green-600">About&nbsp;</a></Link>
                    </Typography>
                    <Typography as="li" variant="small" className="md:p-1 font-normal cursor-pointer">
                        <Link href="/contact"><a className="flex items-center hover:text-green-600">Contact&nbsp;</a></Link>
                    </Typography>
                </ul>
                <Button variant="gradient" className="bg-green-600" color="green" size="md">
                    Log in
                </Button>
                {/* <!-- Mobile menu button --> */}
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </div>
            <div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
        </Navbar>
    );
}
