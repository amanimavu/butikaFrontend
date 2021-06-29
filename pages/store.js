import Gallery from "../components/gallery";


export default function Store({data = []}){
    return(
        <div className={`container-fluid`}>
            <Gallery shoes={data}/>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://butika-backend.herokuapp.com/shoes')
    //const res = await fetch('http://localhost:1337/shoes')
    const data = await res.json()

    return{
        props: {
            data: !data ? [] : data
        }
    }
}