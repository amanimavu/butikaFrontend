import Head from 'next/head';
import styles from '../styles/component styles/home.module.scss';
import {animate, motion} from 'framer-motion';
import Image from 'next/image'
import Styles from '../styles/component styles/gallery.module.scss';

const container = {
    initial:{
        opacity: 0
    },
    animate:{
        opacity: 1,
        transition:{
            staggerChildren: 5
        }
    }
}

const children = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition:{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
        }
    }
}

const children2 = {
    initial:{
        opacity: 0,
        
    },
    animate:{
        opacity: 1,
        transition:{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 7
        }
    }
}
//problem is with the multdimensional array named shortlist,. Can't access items in the second order array
//the error: can't access x of undefined

function Gallery(props){
    let shoeList = []
    let iterations;
    if(props.shoes.length % 4 == 0){
        iterations = props.shoes.length / 4
    }
    else{
        iterations = parseInt(props.shoes.length / 4) + 1
    }
    
    for(let i= 1; i <= iterations; i++){
        if(props.shoes.length > 4){
            shoeList.push(props.shoes.splice(0, 4))
            //console.log(props.shoes.splice(0, 2))
        }
        else{
            shoeList.push(props.shoes.splice(0, props.shoes.length))
        }
    }
    console.log(shoeList[1])
    return shoeList.map((subArr, i)=> {
        return<div key={i} className="row row-cols-1 row-cols-md-4 g-4 m-4">
            {
                subArr.map((item, i) => {
                    return<div className="col">
                            <div key={i} className="card-shadow">
                                <div className={Styles.inner}>
                                    <Image
                                        src={`${item.image.url}`}
                                        className={`card-img-top border ${Styles.img}`}
                                        alt={`image`}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                })
            }
        </div>
    })
}

export default function Home({data}) {
    return(
        <div>
            <div className={`${styles.banner}`}>
                <div className={`container text-center`} >
                    
                </div>
            </div>
            <Gallery shoes={data} />
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:1337/shoes')
    const data = await res.json()

    if(!data){
        return{
            notFound: true,
        }
    }

    return{
        props: {
            data
        }
    }
}