import React, { useEffect } from 'react';
import styles from './styles';
import Tag from '../tag/tag';
import colors from '../../assets/styles/colors'
import {useNavigate} from 'react-router-dom';
import Avatar from '../../components/avatar/avatar';

const QuestionTile = ({
    id,
    title="",
    tags=[],
    createdAt,
    createdBy,
    borderColor="#cdcdcf",
    answers=[],
    user
})=>{
    
    const classes = styles();
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/questions/${id}`);
    }

    return (
        <div className={classes.container} style={{borderColor: borderColor}} onClick={handleNavigation}>
            <div className={classes.avatar}>
                <Avatar url={user.profile_picture} />
            </div>
            <div className={classes.content}>
                <h3 className={classes.title}>{title}</h3>

                <div className={classes.tags}>
                    <div>
                        {tags.map((tag, index)=><Tag key={index} title={tag}/>)}
                    </div>
                    {answers.length > 0 && <Tag title='Answered' color={colors.success}/>}
                </div>

                <div className={classes.footer}>
                    <span>Asked on {new Date(createdAt).toLocaleString()} — <strong>{user.first_name} {user.last_name}</strong></span>
                </div>
            </div>
        </div>
    )
}

export default QuestionTile;