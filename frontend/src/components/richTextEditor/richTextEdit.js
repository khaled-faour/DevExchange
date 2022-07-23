import { useState, useEffect } from 'react';
import { RichTextEditor } from '@mantine/rte';
import './styles.css';

const Editor = () => {
  const [value, onChange] = useState('');


  return <RichTextEditor 
    value={value} 
    onChange={onChange} 
    controls={[
        ['bold', 'strike', 'italic', 'underline', 'clean'],
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ['link', 'image', 'video', 'code', 'blockquote'],
        ['unorderedList', 'orderedList'],
        ['alignCenter', 'alignLeft', 'alignRight']
      ]}
    />;
}

export default Editor;