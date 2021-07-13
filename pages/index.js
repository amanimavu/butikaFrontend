import Head from 'next/head';
import styles from '../styles/component styles/home.module.scss';
import {animate, motion} from 'framer-motion';



export default function Home({data = []}) {
    return(
        <div>
            <div className={`${styles.banner} m-0 row align-items-center`}></div>
            <div className="container">
                <div>
                    <h3>Making a purchase on Butika</h3>
                    <ol>
                        <li> Go to the stores page.</li>
                        <li>Make an order.</li>
                        <li>You will recieve a call to confirm the order made.</li>
                        <li>
                            You will then receive a call to confirm availability of the shoes ordered(done within 24 hours).
                            You then make a full payment for the shoes you want to buy.
                        </li>
                        <li>Shoes will be delivered to you within 24 hours.</li>
                    </ol>
                    <h5><strong>Note</strong>: Free delivery only for purchases made within Juja or Nairobi CBD</h5>
                </div>
            </div>
        </div>
    )
}



