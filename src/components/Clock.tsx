import { useState, useEffect } from "react";
import { ClockProps } from "../types/types";


const Clock = ({item, remove}:ClockProps) => {
    const [clock, setClock] = useState(new Date())
    const {name,timezone} = item;
    const zone = timezone.split(' ')[0].slice(4,7);

    const handleDelete = (name:string) => {
        remove(name);
      };
      const currentHour = (zone:string) => {
       const sign = zone[0];
       const hourZone = zone[1] === '0' ? zone[2] : zone.slice(1,3);
          if (sign === '-') {
              return (+clock.getUTCHours()) - (+hourZone)
            } else {
                return (+clock.getUTCHours()) + (+hourZone)
            }
    const hour = currentHour(zone);
    console.log(hour)
        //** This function returns hours of chosen timezone */
    }

   
    useEffect(() => {
        const interval = setInterval(()=> {
            const time = new Date();
            setClock(time)},1000)
        return ()=>clearInterval(interval)
       }, []);
     

  return (
    <div className="clockContainer">
        <h3 className="nameClock">{name}</h3>
        <div className="btn" onClick={()=> handleDelete(name)}>Х</div>
        <div className="clock"> 
            <div
            className="hour_hand"
            style={{
                transform: `rotateZ(${currentHour(zone)* 30}deg)`
            }}
            />
            <div
            className="min_hand"
            style={{
                transform: `rotateZ(${clock.getMinutes() * 6}deg)`
            }}
            />
            <div
            className="sec_hand"
            style={{
                transform: `rotateZ(${clock.getSeconds() * 6}deg)`
            }}
            />
        </div>
    </div>
  )
}

export default Clock
