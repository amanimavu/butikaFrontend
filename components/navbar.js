import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/component styles/navigation.module.scss';
import Link from 'next/link';

export default function Navigation(){
    return(
        <Navbar sticky="top" className={styles['bg-dark']} variant="light" expand="lg">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id={styles.toggler}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link><Link href="/"><a className={`${styles.navText} mx-2`}>Home</a></Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><Link href="/purchase"><a className={`${styles.navText} mx-2`}>Purchase</a></Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><Link href="/feedback"><a className={`${styles.navText} mx-2`}>Feedback</a></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}