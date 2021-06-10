import Head from 'next/head';
import styles from '../styles/component styles/home.module.scss';
import {animate, motion} from 'framer-motion';



export default function Home({data = []}) {
    return(
        <div>
            <div className={`${styles.banner} m-0 row align-items-center`}></div>
        </div>
    )
}



