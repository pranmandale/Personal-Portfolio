import React, { useState } from 'react';
import logo from '../../assets/photo.avif';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: "Hero" },
        { id: 2, text: "About" },
        { id: 3, text: "Project" },
        { id: 4, text: "Skill" },
        { id: 5, text: "Contact" },
    ];

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-2'>
                        <img src={logo} className='h-12 w-12 rounded-full' alt='Logo' />
                        <h1 className='font-semibold text-xl cursor-pointer'>
                            Pranav
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    {/* for desktop devices */}
                    <div>
                        <ul className='hidden md:flex space-x-8 font-semibold'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Icon for mobile menu */}
                        <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                            {menu ? <RxCross2 size={24} /> : <FiMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* for mobile devices */}
                {menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={() => setMenu(false)} // Close menu on link click
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
