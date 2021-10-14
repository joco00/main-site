import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, imageStyle, overlay, text } from './fadeImage.module.css'


// http://css3.bradshawenterprises.com/cfimg/ 
// https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_fade 

const FadeImage = (props) => {

    const image = getImage(props.url)

    return <div className={container}>
        <GatsbyImage
            image={image}
            className={imageStyle}
            alt={props.alt}
        />
        <div className={overlay}>
            <div className={text}>{props.description ? props.description : 'Just ask jake for the description'}</div>
        </div>
    </div>
}

export default FadeImage