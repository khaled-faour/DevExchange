import React, {useState, useEffect} from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Editor from '../../components/richTextEditor/richTextEdit';
import TagSelect from 'react-select'
import styles from './styles';

// Material UI
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const AddQuestion = ({isOpen, setIsOpen}) => {
  const classes = styles();
  const [fullScreen, setFullScreen] = useState(false);
  const [question, setQuestion] = useState({title:'', content: '', tags: []});
  const [tags, setTags] = useState([]);

  const tagOptions = [
    {value: 'React', label: 'React'},
    {value: 'Javascript', label: 'Javascript'},
    {value: 'Node.js', label: 'Node.js'},
    {value: 'Express', label: 'Express'},
    {value: 'MongoDB', label: 'MongoDB'},
    {value: 'Mongoose', label: 'Mongoose'},
    {value: 'GraphQL', label: 'GraphQL'},
    {value: 'Apollo', label: 'Apollo'},
    {value: 'React-Native', label: 'React-Native'},
    {value: 'React-Router', label: 'React-Router'},
]
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleTitleChange = (event) => {
    setQuestion({...question, title: event.target.value});
  };

  const handleContentChange = (content) => {
    setQuestion({...question, content});
  };

  const handleTagsChange = (e) => {
    let tags = [...e.map(item => item.value)];
    setQuestion({
      ...question,
      tags
    });
  }

  const handleSubmit = () =>{
    axios.post('/posts', question)
    .then(res=>{
      console.log(res)
    })
  }

  useEffect(() => {
    console.log(question);
  }, [question]);
  return (
      <Dialog open={isOpen} onClose={handleClose} fullWidth fullScreen = {fullScreen}>
        <DialogTitle>Add Question</DialogTitle>
        <DialogContent className={classes.content}>
        <Input placeholder="Title" value={question.title} onChange={handleTitleChange}/>
        <TagSelect className={classes.tagsFilter} options={tagOptions} isMulti onChange={handleTagsChange} value={question.tags[0]?.value}/>
        <Editor value={question.content} onChange={handleContentChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} outlined>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
  );
}

export default AddQuestion;
