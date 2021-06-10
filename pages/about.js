import styles from '../styles/component styles/about.module.scss';
import Image from 'next/image';

export default function About(){
    return(
        <div className={`${styles.background} container-fluid pt-3`}>
            <div className="row my-4">
                <div className="col col-lg-1">&nbsp;</div>
                <div className="col-12 col-lg-5">
                    <Image
                        src="/images/shoeDisplay.jpg"
                        alt="an image of a store"
                        width={450}
                        height={300}
                    />
                </div>
                <div className="col-12 col-lg-5 text-start text-light">
                    <h2>What we are about</h2>
                    <p>
                        Butika is an idea  that was birthed in my second year at campus. With Butika, shoe
                        lovers are able to get their hands on a variety of shoes, be it brand new shoes or used shoes;
                        official or casual footwear.
                    </p> 
                </div>
                <div  className="col col-lg-1">&nbsp;</div>
            </div>
            <div className="row">

                <div className="mx-lg-5 mt-lg-5 col-12 col-lg-6 text-light">
                    <h2>What inspired Us</h2>
                    <p>
                        The year 2020 taught many enterprenuers some valuable lesson. With the stringent measures put by 
                        the government to help control the spread of covid 19 a lot of business activities were affected. 
                        People learnt the online presence for businesses is important. Butika helps local shoe vendors grow 
                        their business by providing them with an online platform to make their sales.
                    </p>
                    <p>
                        We all know how it feels when you spot a really good shoe in the streets but have no money to make a 
                        purchase. Well, Butika is there for anyone who wants to buy good shoes at affordable prices. The prices
                        are friendly to low budget customers.
                    </p>
                </div>
            </div>
        </div>
    )
}

 {/* <p>
                        The year 2020 taught many enterprenuers some valuable lesson. With the stringent measures put by 
                        the government to help control the spread of covid 19 a lot of business activities were affected. 
                        People learnt the online presence for businesses is important. Butika helps local shoe vendors grow 
                        their business by providing them with an online platform to make their sales.
                    </p>
                    <p>
                        We all know how it feels when you spot a really good shoe in the streets but have no money to make a 
                        purchase. Well, Butika is there for anyone who wants to buy good shoes at affordable prices. The prices
                        are friendly to low budget customers.
                    </p>
                    <p>
                        We are currently only available in Nairobi but are looking to expand to other part of Kenya and who 
                        knows maybe even to other parts of the world.
                    </p> */}
