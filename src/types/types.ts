
export interface IForm {
    name: string,
    timezone: string
  }


export type TimeFormProps = {
    timesList: IForm[],
    form: IForm,
    onChange: (arg1: string, arg2: string) => void,
    filterTimes: (arg:string) => void,
    addToWatchList: (arg:IForm) => void,
    btnCheckSubmit: boolean
}

export type WatchesListProps = {
  watchesList: IForm[], 
  remove:(arg:string) => void
}




export type ClockProps = {
  item: IForm, 
  remove:(arg:string) => void
}