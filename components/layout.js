import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/component styles/layout.module.scss';


export default function Layout({ children }){
    return(
        <div id={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}