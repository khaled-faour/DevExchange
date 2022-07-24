import React, { useState, useEffect } from 'react';
import styles from './styles';
import {useParams} from 'react-router-dom';

const TutorView = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Tutor View</h1>
            <p>Tutor ID: {id}</p>
        </div>
    )
}

export default TutorView;