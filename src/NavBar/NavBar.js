import { RxHamburgerMenu } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
        <nav className="bg-accent text-text py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="flex space-x-20">
                <div>Logo</div>
                <div className=" hidden md:block flex font-semibold space-x-6">
                    <a>Home</a>
                    <a>Start Your Design</a>
                    <a>About Us</a>
                    <a>Contact</a>
                </div>
                </div>
                <div className="flex items-center">
                <div className="pr-2 font-semibold">Cart</div>
                <LuShoppingCart />
                <div className={`block md:hidden pl-2`}><RxHamburgerMenu /></div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;