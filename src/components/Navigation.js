import { useRef } from 'react';

export default function Navigation() {

    const navRef = useRef();
    const menuRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("menuOpen");
        menuRef.current.classList.toggle('active');
    }


    return (
        <div className="navigation flex">
            <div className="menu flex" ref={navRef}>
                <nav>
                    <ul className="navlinks flex">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Challenges</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Other Links</a></li>
                    </ul>
                </nav>
                <div className="header-btn flex">
                    <a href="#">Sign in</a>
                    <a href="#" className="primary-btn">Try for free</a>
                </div>
            </div>
            <div className="burgermenu" ref={menuRef} onClick={showNavBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}