import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./Header.module.css";

// Import React icons
import { IoMdContact, IoMdClose } from "react-icons/io";
import { FaPortrait } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

function Header(props) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <section className={s.header}>
                <Link className={s.brand} to="/">IbrokhimWeb</Link>
                <div className={s.bars}>
                    <div className={s.links} style={ !open ? {right: '100%'} : {right: 0} }>
                        <Link className={s.link} onClick={(e)=> setOpen(false)} to="/about"><IoMdContact />About</Link>
                        <Link className={s.link} onClick={(e)=> setOpen(false)} to="/rezume"><FaPortrait />Rezume</Link>
                        <Link className={s.link} onClick={(e)=> setOpen(false)} to="/contact"><MdContacts />Contact</Link>
                    </div>
                    <div className={s.bar}>
                        {
                            open
                                ?
                                <IoMdClose className={s.open__close} onClick={(e)=> setOpen(false)} />
                                :
                                <BiMenuAltRight className={s.open__close} onClick={(e)=> setOpen(true)}  />
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;