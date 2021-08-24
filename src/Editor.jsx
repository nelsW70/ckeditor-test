import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Editor = ({ value, onChange }) => {
  const handleChange = (event, editor) => {
    // If event is not passed to handleChange it breaks at the library level
    const data = editor.getData();
    onChange(data);
  };

  return (
    <CKEditor
      config={{
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'blockQuote',
          'link',
          'numberedList',
          'bulletedList',
          'imageUpload',
          'insertTable',
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'mediaEmbed',
          '|',
          'undo',
          'redo',
        ],
      }}
      data={value}
      editor={ClassicEditor}
      onChange={handleChange}
    />
  );
};

export default Editor;
