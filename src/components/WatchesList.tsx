import { WatchesListProps } from "../types/types"
import Clock from "./Clock"


const WatchesList = ({watchesList, remove}:WatchesListProps) => {

  

  return (
    <div className="watchesList">
        {watchesList.map((item) => {
            return <Clock item={item} remove={remove}/>

        })}
    </div> 
  )
}

export default WatchesList
