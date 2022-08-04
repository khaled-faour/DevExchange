import React from 'react';
import styles from './styles'

const Tag = ({
        onClick, 
        rounded = true, 
        color="#CDCDCF", 
        title="Tag"
    })=>{
    const classes = styles();
    return (
        <span className={[
                classes.tag,
                rounded? classes.rounded: '',
            ].join(' ')}

            style={{color: color}}
        > 
            {title}
        </span>
    )
}

export default Tag;