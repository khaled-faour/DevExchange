import React, {useState, useEffect} from 'react';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Editor from '../../components/richTextEditor/richTextEdit';
import styles from './styles';

// Material UI
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AddQuestion = ({isOpen, setIsOpen}) => {
  const classes = styles();
  const [fullScreen, setFullScreen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
      <Dialog open={isOpen} onClose={handleClose} fullWidth fullScreen = {fullScreen}>
        <DialogTitle>Add Question</DialogTitle>
        <DialogContent className={classes.content}>
        <Input placeholder="Title" />
        <Editor />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} outlined>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
  );
}

export default AddQuestion;
