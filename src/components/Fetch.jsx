import { useState } from 'react';

export default function Fetch() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetchData(inputValue);
  };
  return <div>
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Check Result</button>
    </form>
  </div>;
}
