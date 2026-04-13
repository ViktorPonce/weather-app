import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={80} height={42} />
            </div>
            <div>
                <Link href="/">HOME</Link>
                <Link href="/posts">POSTS</Link>
                <Link href="/contact">CONTACT</Link>
            </div>
        </nav>
    )
}
