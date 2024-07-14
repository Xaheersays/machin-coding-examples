import { createContext ,Dispatch, SetStateAction} from "react";

// create

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};
interface TimeContextInterface {
  time : Time,
  setTime:Dispatch<SetStateAction<Time>>;

}
const TimeContext : React.Context<TimeContextInterface | undefined > =
             createContext<TimeContextInterface | undefined>(undefined)

export default TimeContext;