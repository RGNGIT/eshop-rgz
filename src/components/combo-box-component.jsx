import React, { useState } from 'react';
import '../styles/combo-box.css';

export function ComboBox({ label, items, displayProperty, onChange }) {
  const [selectedValue, setSelectedValue] = useState('');

  const onChangeCombo = (event) => {
    const selectedItem = items.find(
      (item) => item[displayProperty] === event.target.value
    );
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(selectedItem);
    }
  };

  return (
    <div className='select-container'>
      <label htmlFor="combo-box">{label}</label>
      <select
        id="combo-box"
        value={selectedValue}
        onChange={onChangeCombo}
      >
        <option value="">Выберите...</option>
        {items.map((item, index) => (
          <option key={index} value={item[displayProperty]}>
            {item[displayProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};