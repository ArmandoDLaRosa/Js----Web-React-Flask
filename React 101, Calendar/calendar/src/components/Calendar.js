import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useState, useEffect} from 'react'


const colors = ['rgb(240, 239, 239)', '#f44336', 'orange', '#4CAF50', 'blue'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getDays(v) {
    let res = await fetch(`http://localhost:5000/days?day_like=${v[2]}-${v[1]}-${v[0]}`)
    let gas = await res.json()

    if (JSON.stringify(gas).includes("gas"))
    {
    let expresion = "(?<=(:))(.*?)(?=(,))";
    let hallado = JSON.stringify(res).match(expresion)[0];
    console.log(hallado[0])
    }
}
function renderDay(day) {
  const yearNum  = day.getFullYear()
  const monthNum = day.getMonth()+1;
  const dayNum = day.getDate()
  let data = getDays([dayNum, monthNum, yearNum])
  console.log(data)
  //console.log(res)
 // const color = colors[res];

  return (
    <div className="day" style={{ backgroundColor: colorStatus(color) }}></div>
  );
}

const Calendar = () => {
  return <div>
   <DayPicker
    renderDay={renderDay}
    numberOfMonths={12}
  />
  </div>;
};

export default Calendar;
