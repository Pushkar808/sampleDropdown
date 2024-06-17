import './App.css';
import { useState } from 'react';
import { options } from './utils/dropdownOptions';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeDrop, setActiveDrop] = useState(false)
  return (
    <div className="App">
      <h3>Should you use a Drop Down</h3>
      <div className='box-container'>
        <div className='selectedOption' onClick={() => setActiveDrop(!activeDrop)}>
          <div> </div>
          <div className="option"> {selectedOption ? selectedOption : "--Select Option--"}</div>
          <i class={`fa-solid ${activeDrop ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
        </div>
        {activeDrop && options?.length !== 0 &&
          <div className='optionsContainer'>
            {options?.dropDownOptions?.map((option) => {
              return (
                <div className='option' onClick={() => { setSelectedOption(option?.value); setActiveDrop(false); }}>
                  {option?.label}
                </div>
              );
            })}
          </div>
        }
      </div>
    </div >
  );
}

export default App;
