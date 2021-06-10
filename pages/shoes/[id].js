import { useState} from 'react';
import Image from 'next/image';
import styles from '../../styles/component styles/id.module.scss'

export default function Shoe({shoeData}){
    let Color;
    const [Quantity, setQuantity] = useState('');
    const [Size, setSize] = useState('');
    const [Location, setLocation] = useState('')
    const handleSizeInput = (e) => {
        setSize(e.target.value)
    }
    const handleQuantityInput = (e) => {
        setQuantity(e.target.value)
    }
    const handleLocationInput = (e) => {
        setLocation(e.target.value)
    }
    const handleColorInput = (e) => {
        Color = e.target.value
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {shoeQuantity: Quantity, shoeSize: Size, shoeColor: Color}
        const url = 'http://localhost:1337/responses'
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return(
        <div className="container pt-4">
            <div className="row">
                <div className="col-3">&nbsp;</div>
                <div className="col">
                    <Image
                        className="border"
                        src={`http://localhost:1337${shoeData.image[0].url}`}
                        alt="shoe"
                        height={300}
                        width={300}
                    />
                </div>
                <div className="col-3">&nbsp;</div>
            </div>
            <form className="row g-3 p-4" onSubmit={handleSubmit}>
                <div className="col col-md-2">&nbsp;</div>
                <div className="col">
                    <div className="form-group row">
                        <label htmlFor="imputShoeType" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Quantity</label>
                        <div className="col-sm-9 col-md-8">
                            <input value={Quantity} onChange={handleQuantityInput} type="shoeQuantity" className="form-controls" id="inputShoeQuantity"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="imputShoeSize" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Size</label>
                        <div className="col-sm-9 col-md-8">
                            <input value={Size} onChange={handleSizeInput} type="shoeSize" className="form-controls" id="inputShoeSize"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="imputCustomerLocation" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Location</label>
                        <div className="col-sm-9 col-md-8">
                            <input value={Location} onChange={handleLocationInput} type="customerLocation" className="form-controls" id="inputCustomerLocation"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Color</label>
                        <div className="col-sm-9 col-md-8">
                            <div className="form-ceck">
                                <input className="form-check-input" onClick={handleColorInput} value="red" type="radio" id="inputShoeColor1" name="inputShoeColor" />
                                <label className={`${styles.radioLabel} form-check-label`} htmlFor="inputShoeColor1" >Red</label>
                            </div>
                            <div className="form-ceck">
                                <input className="form-check-input" onClick={handleColorInput} type="radio" value="blue" id="inputShoeColor2" name="inputShoeColor" />
                                <label className={`${styles.radioLabel} form-check-label`} htmlFor="inputShoeColor2" >Blue</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={`btn ${styles.submitBtn}`}>Submit</button>
                </div>
                <div className="col col-md-2">&nbsp;</div>
            </form>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/shoes')
    const data = await res.json()

    const paths = data.map(item => ({
        params: {id: item._id}
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    let id = params.id
    const res = await fetch(`http://localhost:1337/shoes/${id}`)
    const data = await res.json()

    return{
        props:{
            shoeData: data
        }
    }
}