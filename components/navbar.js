import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/component styles/navigation.module.scss';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {animate, motion} from 'framer-motion';
import Logo from '../public/svgs/lineShoe4.svg';

const variants = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

export default function Navigation(){
    const [collapsed, setCollapsed] = useState(true)

    useEffect(()=>{ 
        const navLinkContainer = document.querySelector(`.d-lg-flex`)

        if(!collapsed){
            navLinkContainer.classList.add(styles.navContOpen)
            navLinkContainer.classList.remove(styles.navContClose)
        }
        else{
            navLinkContainer.classList.add(styles.navContClose)
            navLinkContainer.classList.remove(styles.navContOpen)
        }
    })

    const menuBtnclicked = () =>{
        setCollapsed(!collapsed)
    }

    const linkClicked = () =>{
        setCollapsed(!collapsed)
    }
    
    return(
        <div className={`row ${styles.navBar} m-0`}>
            <Logo className={`${styles.logo} col-4 col-lg-1 mx-lg-5 p-md-0`}/>
            <div className="col-5 col-md-6 d-lg-none">&nbsp;</div>
            <div className="col-12 order-12 col-lg-8">
                <div className={`d-lg-flex`}>
                    <Link href="/"><Nav.Link href="/" className={`${styles.navText} mx-2`} onClick={linkClicked} as="a">Home</Nav.Link></Link>
                    <Link href="/store"><Nav.Link href="/store" className={`${styles.navText} mx-2`} onClick={linkClicked} as="a">Store</Nav.Link></Link>
                    <Link href="/about"><Nav.Link href="/about" className={`${styles.navText} mx-2`} onClick={linkClicked} as="a">About Us</Nav.Link></Link>
                </div>
            </div>
            <div className="pl-md-5 pt-md-2 col-auto">
                <div onClick={menuBtnclicked} className={`${styles.menuBtn} align-self-end d-xs-flex flex-column align-items-center`}>
                    <div className={`${styles.strip} ${styles.one}`}></div>
                    <div className={`${styles.strip} ${styles.two}`}></div>
                    <div className={`${styles.strip} ${styles.three}`}></div>
                </div>
            </div>
        </div>
    )
}

// <Navbar collapseOnSelect sticky="top" className={styles['bg-dark']} variant="light" expand="lg">
        //     <Nav>
        //         <Link href="/"><Nav.Link href="/" className={`${styles.navText} mx-2`} as="a">Home</Nav.Link></Link>
        //     </Nav>
        //     <Nav>
        //         <Link href="/feedback"><Nav.Link href="/feedback" className={`${styles.navText} mx-2`} as="a">Feedback</Nav.Link></Link>
        //     </Nav>
        //     <Nav>
        //         <Link href="/purchase"><Nav.Link href="/purchase" className={`${styles.navText} mx-2`} as="a">Purchase</Nav.Link></Link>
        //     </Nav>
        // </Navbar>