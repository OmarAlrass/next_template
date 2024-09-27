"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [isMobNav, setMobNav] = useState(false);
    let items = [{name: "Home", link: "/"}, {name: "Services", link: "services"},{name: "About", link: "about"}]
    let navItems = items.map(function (item) {
        return <li className="nav-item">
            <Link className="nav-link" aria-current="page" href={item.link}>{item.name}</Link>
        </li>;
    });
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <Image src={logo} alt="Logo" className="d-inline-block align-text-top h-12 w-auto" />
                </Link>
                <div >
                    <ul className="navbar-nav">
                        {navItems}
                    </ul>
                </div>
                <button onClick={() => setMobNav((prev) => !prev)} className="navbar-toggler" type="button" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {
                    isMobNav && (
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {navItems}
                            </ul>
                        </div>
                    )
                }


            </div>
        </nav>
    );
}
export default Navbar;