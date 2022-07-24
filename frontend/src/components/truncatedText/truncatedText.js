import React, { useState, useEffect } from 'react';
import TruncateMarkup from 'react-truncate-markup';
import styles from './styles';


const TruncatedText = ({ children, lines }) => {
    const classes = styles();
    const [isTruncated, setIsTruncated] = useState(true);

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };


    const readMoreEllipsis = (
        <span>
          ...{' '}
          <span className={classes.link} onClick={toggleTruncate}>
            read more
          </span>
        </span>
      );

      
    return (
        isTruncated ? (
        <TruncateMarkup
            lines={lines}
            ellipsis={readMoreEllipsis}
        >
            {children}
        </TruncateMarkup>
        ) : (
        <div>
            {children}
            <span className={classes.link} onClick={toggleTruncate}>
                show less
            </span>
        </div>
        )
            
    );
}

export default TruncatedText;