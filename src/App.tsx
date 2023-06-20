
import './App.css'
import { TimezonesList } from './assets/timeZonesList' 
import TimeForm from './components/TimeForm';
import { useState } from 'react';
import { IForm } from './types/types';
import WatchesList from './components/WatchesList';

function App() {
  const timesZones:IForm[] = JSON.parse(JSON.stringify(TimezonesList));
  const [form, setForm] = useState<IForm>({name:'', timezone:''});
  const [timesList,setTimesList] = useState<IForm[]>(timesZones);
  const [btnCheckSubmit, setBtnCheckSubmit] = useState(false);
  const [watchList, setWatchList] = useState<IForm[]>([]);

  const handleChange = (event:string, value:string) => {
    setForm((prev) => ({ ...prev, [event]: value }));
    if (form.name !== '' && form.timezone !== ''){
      setBtnCheckSubmit(true)
    } else {
      setBtnCheckSubmit(false)
    }
  };

  function filterTimeZones(chars:string): void {
   setTimesList(timesZones.filter((zone) => {
      const re = new RegExp(chars, 'gi')
      return zone.name.match(re)
      //** This function checks input value with value of TimeZones and returns matching list*/
    }))
  }


    const addToWatchList = (watch:IForm) => {
      setWatchList((prev) => [
        ...prev, watch]);
        setForm({name:'', timezone:''})
    }
    
    const removeClock=(name:string)=>{
      setWatchList((prev)=>prev.filter(item=>item.name!==name))
    }
  
  return (
  <div className='App'>
     <TimeForm timesList={timesList} form={form} onChange={handleChange} filterTimes={filterTimeZones} addToWatchList={addToWatchList} btnCheckSubmit={btnCheckSubmit}/>
     <WatchesList watchesList={watchList} remove={removeClock}/>
  </div>
  )
}

export default App


