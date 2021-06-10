import Styles from '../styles/component styles/gallery.module.scss';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Gallery(props){
    const router = useRouter()
    return <div className={`${Styles.bg} row row-cols-1 p-4 pt-md-4  row-cols-md-2 row-cols-lg-3 row-cols-xl-5 `} >
        {
            props.shoes.map((item, i) =>{
                return <div key={`shoe-item#${i}`} className="p-3 col p-md-3">
                <div className={`${Styles.cardTweak} card bg-transparent text-white shadow mb-4`}>
                    <div className={Styles.inner}>
                        <Image
                            src={`http://localhost:1337${item.image[0].url}`}
                            className={`card-img-top border ${Styles.img}`}
                            layout="responsive"
                            alt={`shoe`}
                            height={300}
                            width={300}
                            
                        />
                    </div>
                    <div className={`border-top card-body ${Styles.cardBodyTweak}`}>
                        <ul className={Styles.shoeProperties}>
                            <li><strong>Name</strong>: {item.type}</li>
                            <li><strong>Sizes</strong>: {item.sizes}</li>
                            <li><strong>Price</strong>: {item.price}</li>
                        </ul>
                        <Button onClick={()=> router.push(`/shoes/${item._id}` /*`/shoes/${item.type}`*/)} variant="dark" className={Styles.orderBtn}>Order</Button>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
            })
        }
    </div>
}

