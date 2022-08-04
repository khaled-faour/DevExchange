import { RichTextEditor } from '@mantine/rte';
import './styles.css';

const Editor = ({onChange, value, readOnly = false}) => {

  return <RichTextEditor
    readOnly={readOnly}
    style={{border: readOnly ? 'none' : '1px solid #ccc', width: '100%', height: 'fit-content'}}
    value={value} 
    onChange={onChange} 
    controls={[
        ['bold', 'strike', 'italic', 'underline', 'clean'],
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        ['link', 'image', 'code', 'blockquote'],
        ['unorderedList', 'orderedList'],
        ['alignCenter', 'alignLeft', 'alignRight']
      ]}
    />;
}

export default Editor;