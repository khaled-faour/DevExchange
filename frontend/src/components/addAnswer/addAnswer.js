import React, { useState, useEffect } from 'react';
import Editor from '../../components/richTextEditor/richTextEdit';
import Button from '../../components/button/button';
import {useParams} from 'react-router-dom';
import styles from './styles';
import axios from 'axios';


const AddAnswer = () =>{
  const classes= styles();
  const {id} = useParams();
  const [answer, setAnswer] = useState({
    question_id: id,
    content: '',
  });

  const clearAnswer = () =>{
    
  }

  const handleValueChange = (value) =>{
    setAnswer({
      ...answer,
      content: value
    });
  }

  const handleSubmit = () =>{
    axios.post('/posts', answer)
    .then(res=>{
      console.log(res)
    })
  }

  useEffect(()=>{
    console.log(answer)
  }, [answer]);


  return (
    <div className={classes.container}>
      <Editor value={answer.content} onChange={handleValueChange}/>
      <div className={classes.actions}>
        <Button onClick={clearAnswer} rounded outlined>Clear</Button>
        <Button onClick={handleSubmit} rounded>Submit</Button>
      </div>
    </div>
  );
}

export default AddAnswer;