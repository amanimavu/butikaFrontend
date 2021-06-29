import { useState} from 'react';
import Image from 'next/image';
import styles from '../../styles/component styles/id.module.scss';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Shoe({shoeData}){
    let Color;
    const [Quantity, setQuantity] = useState('');
    const [Size, setSize] = useState('');
    const [Location, setLocation] = useState('');
    const [Contact, setContact] = useState('');
    //const [AlertOn, setAlertOn] = useState(false);
    const handleSizeInput = (e) => {
        setSize(e.target.value)
    }
    const handleQuantityInput = (e) => {
        setQuantity(e.target.value)
    }
    const handleLocationInput = (e) => {
        setLocation(e.target.value)
    }
    const handleContactInput = (e) => {
        setContact(e.target.value)
    }
    const handleColorInput = (e) => {
        Color = e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {shoeQuantity: Quantity, shoeSize: Size, shoeColor: Color, customerLocation: Location, customerContact: Contact}
        //const url = 'http://localhost:1337/responses'
        const url = 'https://butika-backend.herokuapp.com/responses'
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Your order has been submitted");
        //setAlertOn(!AlertOn);
    }

    return(
        <div className="container pt-4">
            {/* <Alert className={styles.alert} show={AlertOn} variant="success">
                <p>Your order has been submitted</p>
                <Button onClick={()=>setAlertOn(!AlertOn)}>Ok</Button>
            </Alert> */}
            <div className="row">
                <div className="col">&nbsp;</div>
                <div className={`col-auto ${styles.modifiedColAuto}`}>
                    <Image
                        className="border"
                        //src={`http://localhost:1337${shoeData.image[0].url}`}
                        src={`https://butika-backend.herokuapp.com${shoeData.image[0].url}`}
                        alt="shoe"
                        height={300}
                        width={300}
                    />
                </div>
                <div className="col">&nbsp;</div>
            </div>
            <form className="row g-3 p-4" onSubmit={handleSubmit}>
                <div className="col">&nbsp;</div>
                <div className={`col-auto ${styles.modifiedColAuto}`}>
                    <div className="form-group row">
                        <label htmlFor="imputShoeType" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Quantity</label>
                        <div className="col-sm-9 col-md-8">
                            <input required="required" value={Quantity} onChange={handleQuantityInput} type="shoeQuantity" className="form-controls" id="inputShoeQuantity"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="imputShoeSize" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Size</label>
                        <div className="col-sm-9 col-md-8">
                            <input required="required" value={Size} onChange={handleSizeInput} type="shoeSize" className="form-controls" id="inputShoeSize"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="imputCustomerLocation" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Location</label>
                        <div className="col-sm-9 col-md-8">
                            <input required="required" value={Location} onChange={handleLocationInput} type="customerLocation" className="form-controls" id="inputCustomerLocation"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="imputShoeSize" className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Tel number</label>
                        <div className="col-sm-9 col-md-8">
                            <input required="required" value={Contact} onChange={handleContactInput} type="customerContact" className="form-controls" id="inputContact"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className={`${styles.label} col-sm-3 col-md-4 col-form-label`}>Color</label>
                        <div className="col-sm-9 col-md-8">
                            {
                                shoeData.colors.map((color, i)=> {
                                    return <div key={`colorOption${i}`} className="form-ceck">
                                        <input className="form-check-input" onClick={handleColorInput} value="red" type="radio" id="inputShoeColor1" name="inputShoeColor" />
                                        <label className={`${styles.radioLabel} form-check-label`} htmlFor="inputShoeColor1" >{color}</label>
                                    </div>
                                }) 
                            }
                            {/* <div className="form-ceck">
                                <input className="form-check-input" onClick={handleColorInput} value="red" type="radio" id="inputShoeColor1" name="inputShoeColor" />
                                <label className={`${styles.radioLabel} form-check-label`} htmlFor="inputShoeColor1" >Red</label>
                            </div>
                            <div className="form-ceck">
                                <input className="form-check-input" onClick={handleColorInput} type="radio" value="blue" id="inputShoeColor2" name="inputShoeColor" />
                                <label className={`${styles.radioLabel} form-check-label`} htmlFor="inputShoeColor2" >Blue</label>
                            </div> */}
                        </div>
                    </div>
                    <button type="submit" className={`btn ${styles.submitBtn}`}>Submit</button>
                </div>
                <div className="col">&nbsp;</div>
            </form>
        </div>
    )
}

export async function getStaticPaths(){
    //const res = await fetch('http://localhost:1337/shoes')
    const res = await fetch('https://butika-backend.herokuapp.com/shoes')
    const data = await res.json()

    const paths = data.map(item => ({
        params: {id: item._id}
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
    let id = params.id
    //const res = await fetch(`http://localhost:1337/shoes/${id}`)
    const res = await fetch(`https://butika-backend.herokuapp.com/shoes/${id}`)
    const data = await res.json()

    return{
        props:{
            shoeData: data
        }
    }
}