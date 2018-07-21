import React from 'react'

const Image = props => (
    <img className={props.className}
        src={props.imgSrc}
        alt={props.altText || ""}
        width={props.Width}
        height={props.Height}
    />
)

export default Image