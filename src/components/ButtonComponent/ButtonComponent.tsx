import React from 'react';
import Button from '@material-ui/core/Button';
import { MONTH_NAMES } from '../constants/constants';
import { ISelectProps } from '../Interface/interfaces';
import './ButtonComponent.css'

const ButtonComponent: React.FC<ISelectProps> = (props: ISelectProps) => {
  const getNumberMonth = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    const index = MONTH_NAMES.findIndex((el) => el === name);

    props.clickMonth(index+1);
    console.log(index);
  };

  return (
    <div className='wrapper'>
      {MONTH_NAMES.map((el) => {
        return (
          <Button name={el} key={el} variant="contained" onClick={getNumberMonth}>
            {el}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonComponent;
