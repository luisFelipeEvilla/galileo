import React from 'react'
import '../../../assets/css/footer/contact.css'
import Image from './image'

const Contact = props => (
    // <div className="contact">
        <div className="contact-links">
        {
            props.links.map( link => {
                if(link.tel) {
                    return (
                    <a href={"tel:"+link.url} 
                    className="tel">
                        <Image
                        Heigth={30}
                        Width={30} 
                        imgSrc={"../../../assets/svg/icons/whatsapp.svg"} 
                        alt=""/>
                        </a>
                        )
                    }
                return (<a 
                    href={link.url} 
                    target="_blank">
                        <Image
                        Heigth={30}
                        Width={30}  
                        imgSrc={link.icon}
                         alt=""/>
                    </a>) 
            })
        }</div>
    // </div>
)

export default Contact