"use client";
import React from 'react'
import Navbar from './NavBar'
import { DiscordIcon, Linkedin, TelegramIcon, XIcon } from './common/Icons';
import Link from 'next/link';

const HeroSec = () => {
    const [toggle, setToggle] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false);
    const scrollToSection = (elementId) => {
        setToggle(true)
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    };
    return (
        <header className='relative min-h-[810px] bg-[url(/assets/gif/hero-bg.gif)] bg-no-repeat bg-cover bg-center after:absolute after:bg-black after:bg-opacity-50 after:top-0 after:left-0 after:w-full after:h-full'>
            <Navbar />
            <div className='absolute z-20 -translate-x-1/2 bottom-10 left-1/2'>
                <button onClick={() => scrollToSection('footer')} className={`flex w-11 h-[73px] rounded-full border border-primary-red relative after:absolute after:w-7 after:h-7 after:rounded-full after:bg-primary-red after:duration-300 after:left-1/2 after:-translate-x-1/2 ${toggle ? "after:top-9" : "after:top-2"}`}></button>
            </div>
            <div className='absolute right-0 z-20 -translate-y-1/2 top-1/2'>
                <div className='bg-primary bg-opacity-15 backdrop-blur-[2px] flex flex-col px-[22px] py-[70px] gap-7 relative after:absolute after:-left-4 after:bg-white after:top-1/2 after:w-4 after:h-[145px] after:rounded-l-xl after:-translate-y-1/2'>
                    <Link target='_blank' href="https://x.com/?lang=en"><XIcon className="!w-9 !h-9 !fill-white" /></Link>
                    <Link target='_blank' href="https://discord.com"><DiscordIcon className="!w-9 !h-9 !fill-white" /></Link>
                    <Link target='_blank' href="https://telegram.com"><TelegramIcon className="!w-9 !h-9 !fill-white" /></Link>
                    <Link target='_blank' href="https://linkedin.com"><Linkedin className="!w-9 !h-9 !fill-white" /></Link>
                </div>
            </div>
        </header>
    )
}

export default HeroSec
