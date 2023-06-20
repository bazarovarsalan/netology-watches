import { useState } from "react";
import { IForm, TimeFormProps} from "../types/types";

const TimeForm = ({timesList, form, onChange, filterTimes, addToWatchList, btnCheckSubmit}: TimeFormProps) => {
    const [showTimeList, setShowTimeList] = useState(false);


    const handleChangeForm = (event:React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.name, event.target.value);
        if (event.target.name === 'timezone') {
            filterTimes(event.target.value);
            setShowTimeList(true);
        }
    }

    function selectZone(event:React.SyntheticEvent): void {
        event.preventDefault();
        onChange('timezone', event.currentTarget.innerHTML);
        setShowTimeList(false);
    }


    function addWatchSubmit(event: React.MouseEvent):void {
        event.preventDefault();
        const watch:IForm = {name:form.name, timezone:form.timezone}
        addToWatchList(watch)
    } 

  return (
     <form className="form">
        <div className="form__item">
          <label className="form__label">Название</label>
          <input
            className="form__input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChangeForm}
            autoComplete="off"
          />
        </div>
        <div className="form__item">
          <label className="form__label">Временная зона</label>
            <input
            className="form__input"
            type="text"
            name="timezone"
            value={form.timezone}
            onChange={handleChangeForm}
            autoComplete="off"
          />
          {showTimeList && 
                <ul className="optionsZones">
                    {timesList.map((zone) => {
                        return <ul className="ul"><span className="span" key={zone.name} onClick={selectZone}>{zone.name}</span></ul>
                        }).slice(0,10)                                                // i don't understand how to type this function
                    }
            
                </ul>}
        </div>
        <div className="form__item">
          <button className="form__button" type="submit" onClick={addWatchSubmit} disabled={!btnCheckSubmit}>
            Добавить
          </button>
        </div>
      </form>
  )
}

export default TimeForm
