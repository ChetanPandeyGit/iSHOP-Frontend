import { useEffect, useState } from "react"
import image1 from '/Images/corousel_1.png'
import image2 from '/Images/corousel_2.png'
import image3 from '/Images/corousel_3.png'
import image4 from '/Images/image-four.jpg'
import image5 from '/Images/image-two.jpg'
import image6 from '/Images/image-three.jpg'



const Slider = () =>{
    const [image, setImage] = useState(0)
    const [images] = useState([image1,image2,image3,image4,image5,image6])
    
    useEffect(()=>{
        setInterval(() => {
            setImage(image => image <=5  ? image + 1 : 0)
        }, 3000);  
    },[]) 
    
    return(
        <div className="hero1">
            <img src={images[image]} alt="slider" className='Iphone-img' />
        </div>
    )
}

export default Slider