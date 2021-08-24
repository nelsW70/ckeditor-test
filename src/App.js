import './App.css';
import { useState } from 'react';
import Editor from './Editor';

function App() {
  const initialState = `<h2>header one</h2><h3>header two</h3><h4>header three</h4><p>paragraph</p><p><strong>paragraph bold</strong></p><p><i>paragraph italic</i></p><ol><li>one</li><li>two</li><li>three</li></ol><ul><li>a</li><li>b</li><li>c</li></ul><table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>`;
  const [value, setValue] = useState(initialState);

  const handleClear = event => {
    event.preventDefault();
    setValue('');
  };

  const handleEditorChange = currentValue => {
    setValue(currentValue);
  };

  const handleRefresh = event => {
    event.preventDefault();
    setValue(initialState);
  };

  const handleSave = event => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div className="App">
      <Editor value={value} onChange={handleEditorChange} />
      <button onClick={handleSave}>save</button>
      <button onClick={handleRefresh}>refresh</button>
      <button onClick={handleClear}>clear</button>
      <br />
      {JSON.stringify(value)}
    </div>
  );
}

export default App;
