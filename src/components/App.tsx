import React from 'react';
import Header from './Header/Header';
import ButtonComponent from './ButtonComponent/ButtonComponent';
import DateMenu from './DateMenu/DateMenu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { useState } from 'react';
import { WEEK } from './constants/constants';
import { useEffect } from 'react';

const App: React.FC = () => {
  const obj = {
    dayNumber: 1,
    dayName: '',
    isReserve: false
  }


  const dataValue = new Date();
  const [month, setMonth] = useState<number>(dataValue.getMonth() + 1);
  const [result, setResult] = useState<string[]>([]);

  const currentDate = (year: number, month: number): string[] => {
    let data = new Date(year, month - 1, 1);
    let dataArray = [];
    while (data.getMonth() === month - 1) {
      dataArray.push(data.getDate() + ' ' + WEEK[data.getDay()]);
      data.setDate(data.getDate() + 1);
    }
    return dataArray;
  };

  const dayInMonth = currentDate(dataValue.getFullYear(), month);

  useEffect(() => {
    setResult(dayInMonth);
  }, []);

  const handelGetMonth = (month: any): void => {
    setMonth(month);
    setResult(dayInMonth);
  };

  const handelClick = (startValue: number, endValue: number): void => {
    const arrayData: string[] = currentDate(dataValue.getFullYear(), month);
    setResult(arrayData.slice(startValue-1, endValue));
  };

  const listDays = result.map(
    (str, i): JSX.Element => (
      <div className="card" key={i.toString()}>
        <Card className="{classes.root}">
          <CardContent>
            <Typography variant="h5" component="h2">
              {str}
            </Typography>
            <Typography className="{classes.title}" color="textSecondary" gutterBottom>
              <div className='buttons'>
              <Button size="small">10-00 </Button>
              <Button size="small">12-00 </Button>
              <Button size="small">14-00 </Button>
              </div>             
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Зарезервировать</Button>
          </CardActions>
        </Card>
      </div>
    )
  );

  return (
    <>
      <Header />
      <ButtonComponent clickMonth={handelGetMonth} />
      <DateMenu clickFn={handelClick} />
      <div className="title">
        <div className="wrapper">{listDays}</div>
      </div>
      
      
    </>
  );
};

export default App;
