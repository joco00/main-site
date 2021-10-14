import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, image } from './fadeImage.module.css'

// http://css3.bradshawenterprises.com/cfimg/

const FadeImage = (props) => {
    const [show, setShow] = useState(false);

    return <div className={container} onClick={() => { setShow(!show); }} >
        <div className={image} style={!show ? { opacity: 1 } : { opacity: 0 }}>
            <StaticImage
                src='../images/navBar.png'
                alt="open navBar"
                width={42} aspectRatio={1}
                loading="eager" />
        </div>
        <div className={image} style={show ? { opacity: 1 } : { opacity: 0 }}>
            <StaticImage
                src='../images/x_icon_thin.png'
                alt="close navBar"
                width={42} aspectRatio={1}
                loading="eager" />
        </div>


    </div>
}

export default FadeImage