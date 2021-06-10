import styles from '../styles/component styles/footer.module.scss';
import Facebook from '../public/svgs/facebook.svg';
import Twitter from '../public/svgs/twitter.svg';
import Instagram from '../public/svgs/instagram.svg';
import Link from 'next/link';

export default function Footer(){
    return(
        <div className={`${styles.footer} row`}>
            <div className="pt-2 pt-md-3 col-md-3 col-sm-6 d-flex align-items-center justify-content-around">
                <Link href="https://www.instagram.com/butika_ig/">
                    <a /*target="_blank"*/ className={`${styles.iconContainer} d-flex justify-content-center align-items-center border`}>
                        <Instagram className={`${styles.socialIcons}`}/>
                    </a>
                </Link>
                <Link href="https://web.facebook.com/butika.fb/">
                    <a /*target="_blank"*/ className={`${styles.iconContainer} d-flex justify-content-center align-items-center border`}>
                        <Facebook className={`${styles.socialIcons}`} />
                    </a>
                </Link>
                <Link href="https://twitter.com/butika_tw">
                    <a /*target="_blank"*/ className={`${styles.iconContainer} d-flex justify-content-center align-items-center border`}>
                        <Twitter className={`${styles.socialIcons}`} />
                    </a>
                </Link>
            </div>
            <div className="col-md-10 col-sm-6">&nbsp;</div>
        </div>
    )
}