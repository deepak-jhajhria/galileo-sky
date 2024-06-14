"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DropDwon } from './common/Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function showNav() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [isOpen]);

    return (
        <nav className="backdrop-blur-[20px] items-center shadow-[0_7px_10.9px_0_#0000002E] absolute top-0 left-0 w-full z-20 overflow-hidden">
            <div className='container max-w-[840px] relative h-[71px] flex items-center'>
                <div className={`${isOpen ? "top-0" : "-top-full"} flex items-center gap-10 max-lg:fixed max-lg:left-0 max-lg:bg-black md:bg-full bg-cover max-lg:h-screen max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col justify-center`}>
                    <ul className='flex items-center gap-6 max-lg:flex-col'>
                        <li><Link href='/' className='flex items-center gap-1 text-sm font-semibold font-poppins sm:text-base text-primary'>Games <span><DropDwon /></span></Link></li>
                        <li><Link href='/' className='text-sm font-semibold font-poppins sm:text-base text-primary'>AI-Platform</Link></li>
                    </ul>
                    <Link href='/'><Image className='max-lg:absolute max-lg:left-0 max-lg:top-0' src='/assets/images/nav-logo.png' alt="logo" width={372} height={71} /></Link>
                    <ul className='flex items-center gap-6 max-lg:flex-col'>
                        <li><Link href='/' className='text-sm font-semibold font-poppins sm:text-base text-primary'>Team</Link></li>
                        <li><Link href='/' className='text-sm font-semibold font-poppins sm:text-base text-primary'>Careers</Link></li>
                    </ul>
                </div>
                <button onClick={showNav} className="lg:hidden relative z-[4]">
                    <div onClick={() => setIsOpen(!isOpen)} className='relative flex flex-col justify-between w-6 h-5 cursor-pointer z-[100] lg:hidden sm:w-7 sm:h-5'>
                        <span className={`${isOpen ? 'rotate-[50deg] translate-y-[15px]' : ""} h-[3px] w-full duration-300 rounded-[3px] bg-white ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'hidden' : ""} h-[3px] w-full duration-300 rounded-[3px] bg-white ease-linear transition-all`}></span>
                        <span className={`${isOpen ? 'rotate-[-50deg] translate-y-[-50%]' : ""} h-[3px] w-full duration-300 rounded-[3px] bg-white ease-linear transition-all`}></span>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;