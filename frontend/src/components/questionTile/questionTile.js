import React, { useState, useEffect } from 'react';
import styles from './styles';
import Tag from '../tag/tag';
import colors from '../../assets/styles/colors'
import {useNavigate} from 'react-router-dom';

const QuestionTile = ({
    id,
    title="",
    tags=[],
    isAnswered=false,
    createdAt,
    createdBy,
    borderColor="#ECE9EF",
})=>{
    
    const classes = styles();

    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/question/${id}`);
    }
    return (
        <div className={classes.container} style={{borderColor: borderColor}} onClick={handleNavigation}>

            <h1 className={classes.title}>{title}</h1>

            <div className={classes.tags}>
                <div>
                    {tags.map(tag=><Tag title={tag}/>)}
                </div>
                {isAnswered && <Tag title='Answered' color={colors.success}/>}
            </div>

            <div className={classes.footer}>
                <span>Asked on {createdAt} — <strong>{createdBy}</strong></span>
            </div>
        </div>
    )
}

export default QuestionTile;