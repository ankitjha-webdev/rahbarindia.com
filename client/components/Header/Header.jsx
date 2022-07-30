import React, { useState, Fragment } from 'react';
import { Navbar, Button, Typography, Avatar, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from 'next/link'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [open, setOpen] = useState(false);

    const handleOpen = (value) => setOpen(!open);

    return (
        <>
            <Navbar className="mx-auto  shadow-md shadow-green-400 hidden md:block">
                <div className=" flex items-center justify-between text-blue-grey-900 ">
                    <Link href="/">
                        <a>
                            <Image
                                src="/logo_rahbarindia.png"
                                alt="Rahbar India"
                                width={200}
                                height={40}
                                className="cursor-pointer font-normal"
                            />
                        </a>
                    </Link>

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
                    <Button variant="gradient" onClick={handleOpen} className="bg-green-600" color="green" size="md">
                        Log in
                    </Button>
                    {/* <!-- Mobile menu button --> */}


                </div>
               
            </Navbar>
            <Navbar className="mx-auto shadow-md shadow-green-400 flex md:hidden">
                <div className=" items-center justify-between text-blue-grey-900 ">
                    <Link href="/">
                        <a>
                            <Image
                                src="/logo_rahbarindia.png"
                                alt="Rahbar India"
                                width={200}
                                height={40}
                                className="cursor-pointer font-normal"
                            />
                        </a>
                    </Link>
                </div>

            </Navbar>
            <div className=" md:hidden items-center absolute top-4 right-0 my-2">
                <button className="outline-none" onClick={toggle}>
                    <svg className=" w-6 h-6 mr-4 text-gray-500 hover:text-green-500 "
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

            {
                isOpen && (

                    <Navbar variant="gradient" blurred={false} shadow={false} className="mx-auto shadow-md shadow-green-400 flex md:hidden">
                        <div className="mx-auto flex flex-col items-center justify-between text-blue-grey-900 ">

                            <ul className="flex items-center gap-6 flex-row my-2">
                                <div className=" flex flex-col ">
                                    <Typography as="li" variant="small" className="active my-1 p-1 font-semibold cursor-pointer">
                                        <Link href="/"><a className="flex items-center hover:text-green-600  " >Home&nbsp;</a></Link>
                                    </Typography>
                                    <Typography as="li" variant="small" className="md:p-1 my-1 font-normal cursor-pointer">
                                        <Link href="/service"><a className="flex items-center  hover:text-green-600">Service&nbsp;</a></Link>
                                    </Typography>
                                    <Typography as="li" variant="small" className="md:p-1 my-1font-normal cursor-pointer">
                                        <Link href="/about"><a className="flex items-center hover:text-green-600">About&nbsp;</a></Link>
                                    </Typography>
                                    <Typography as="li" variant="small" className="md:p-1 my-1font-normal cursor-pointer">
                                        <Link href="/contact"><a className="flex items-center hover:text-green-600">Contact&nbsp;</a></Link>
                                    </Typography>
                                </div>
                            </ul>
                            <Link href="/login">
                            <Button variant="gradient" className="bg-green-600 w-full flex flex-col items-center justify-between" color="green" size="md">
                                <a className="flex items-center">Log in&nbsp;</a>
                            </Button>
                            </Link>
                            {/* <!-- Mobile menu button --> */}


                        </div>
                    </Navbar>
                )
            }
            
            <Fragment>
             
                    <Dialog open={open} handler={handleOpen} size="lg:xs md:lg " className='shadow-sm shadow-green-700 rounded-lg'>
                        <DialogHeader className='justify-center items-center text-green-500 '>Login to Enter     </DialogHeader>
                        <DialogBody divider className='flex flex-col m-0'>
                            <div className='bg-grey-50 px-8 mx-auto mb-5 shadow-lg shadow-green-700 rounded-lg py-8'>
                                {/* Logo */}
                                <div className=''>
                                    <Image src="/logo_rahbarindia.png" width={150} height={40} className="mx-auto" />
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className='my-2 w-full items-center justify-center'>
                                        <Input type="text" label="Username" color='grey' className="w-full" />
                                    </div>
                                    <div className="my-2 w-full text-center items-center justify-center">
                                        <Input type="text" label="Email" color='grey' className="w-full" />
                                    </div>
                                    <div className="my-2 w-full text-center items-center justify-center">
                                        <Input type="text" label="Password" color='grey' className="w-full" />
                                    </div>
                                </div>
                                <div className='flex flex-row  justify-center items-center mt-8 space-x-10'>
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={handleOpen}
                                        className="mr-1 bg-green-50 text-white"
                                    >
                                        <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="green" onClick={handleOpen}>
                                        <span>Login</span>
                                    </Button>
                                </div>
                                <div className="grid  items-center justify-center pt-2">
                                    <small className='flex mt-2'> Don't have Account?
                                        <Link href="/register"><a className="flex flex-row items-center hover:text-green-600 mx-2 ">Register&nbsp;</a></Link>
                                    </small>
                                </div>
                            </div>

                        </DialogBody>

                    </Dialog>
           
            </Fragment>
        </>

    );
}
