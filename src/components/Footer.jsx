import Image from "next/image"
import Link from "next/link"
import { footerSocalIconList } from "./common/Helper"

const Footer = () => {
    return (
        <footer>
            <div className="container max-w-[1170px]">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <Link href='/'><Image src='/assets/images/logo.png' alt="logo" width={289} height={53} /></Link>
                        <p className="text-base font-normal font-poppins text-secondary">Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire</p>
                        <div className="flex items-center gap-4 mt-2">{footerSocalIconList.map((item, index) => (<Link className="flex items-center justify-center duration-300 border rounded-full h-9 w-9 border-primary-red hover:scale-110" key={index} href={item.link}>{item.logo}</Link>))}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
