import Image from "next/image"
import Link from "next/link"
import { footerLinkList, footerSocalIconList } from "./common/Helper"

const Footer = () => {
    return (
        <footer id="footer" className=" bg-primary-light">
            <div className="container max-w-[1170px] pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <Link href='/'><Image src='/assets/images/logo.png' alt="logo" width={289} height={53} /></Link>
                        <p className="text-sm font-normal sm:text-base font-poppins text-secondary max-w-[448px] text-opacity-70">Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire</p>
                        <div className="flex items-center gap-4 mt-2">{footerSocalIconList.map((item, index) => (<Link className="flex items-center justify-center duration-300 border rounded-full h-9 w-9 border-primary-red hover:scale-110" key={index} href={item.link}>{item.logo}</Link>))}</div>
                    </div>
                    <div className="flex mt-10 max-lg:flex-wrap max-xl:justify-between lg:mt-0 max-lg:gap-10">
                        <ul className="flex flex-col gap-3 lg:ml-6 xl:ml-9">
                            <li className="flex mb-1 text-sm font-normal sm:text-base text-secondary font-poppins">Quick Links</li>
                            {footerLinkList.map((item, index) => (<li key={index} className="flex"><Link className="text-sm font-normal sm:text-base font-poppins text-secondary max-w-[448px] text-opacity-70 duration-300 hover:text-opacity-100 text-nowrap" href={item.link}>{item.title}</Link></li>))}
                        </ul>
                        <div className="flex flex-col gap-4 lg:ml-8 xl:ml-[76px]">
                            <p className="mb-1 text-sm font-normal sm:text-base text-secondary font-poppins">Get Connected</p>
                            <form className="p-[7px] bg-primary-dark rounded-[10px] flex items-center justify-between w-full">
                                <input type="email" id="email" placeholder="Email Here" className="text-sm font-normal bg-transparent placeholder:text-secondary sm:text-base text-secondary font-poppins px-[14px] outline-none" required />
                                <button type="submit" className="px-8 text-sm font-normal sm:text-base text-primary font-poppins bg-primary-redLight py-[14px] rounded-lg">Submit</button>
                            </form>
                            <p className="text-sm font-normal sm:text-base font-poppins text-secondary max-w-[338px] text-opacity-70">Your email address is very safe with Galileo Sky. You will only receive our gaming updates</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='px-5 py-3 text-xs font-normal text-center border-t sm:text-sm sm:py-4 md:py-6 text-secondary font-poppins md:text-base border-secondary border-opacity-15 mt-7 sm:mt-8 md:mt-11'>{new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved</p>
        </footer>
    )
}

export default Footer
