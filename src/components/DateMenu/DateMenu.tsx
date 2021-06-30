import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { IGerProps } from '../Interface/interfaces';
import './DateMenu.css';

const DateMenu: React.FC<IGerProps> = ({ clickFn }: IGerProps) => {
  const [startData, setStartData] = useState('');
  const [endData, setEndData] = useState('');

  const handelClick = () => {
    clickFn(Number(startData), Number(endData));
  };

  const handelInput = (e: any) => {
    const { name } = e.currentTarget;

    if (name === 'start') {
      setStartData(e.target.value);
    } else {
      setEndData(e.target.value);
    }
  };

  return (
    <div className="wrapper">
      <input
        className="input"
        min="1"
        max="31"
        value={startData}
        name="start"
        placeholder="Введите начальую дату"
        onChange={handelInput}></input>
      <input
        min="1"
        max="31"
        value={endData}
        name="end"
        placeholder="Введите конечуню дату"
        onChange={handelInput}></input>
      <Button variant="contained" color="secondary" onClick={handelClick}>
        Выбрать
      </Button>
    </div>
  );
};

export default DateMenu;
