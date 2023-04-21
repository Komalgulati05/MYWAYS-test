import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log({ name, title, text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Text:
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
