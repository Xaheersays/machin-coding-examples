import TimeContext from "./TimeContext";
import React, { useState ,ReactNode} from 'react'


// provide 

interface TimeContextProviderInterface { 
  children:ReactNode
 }

type Time = {
  hours:number,
  minutes:number,
  seconds:number
}


const TimeContextProvider: React.FC<TimeContextProviderInterface> = ({children}) => {
  const [time,setTime ] = useState<Time>({hours:2 , minutes:2 ,seconds:40})
  return (
    <TimeContext.Provider value = { {time: time,setTime : setTime} }>
      {children}
    </TimeContext.Provider>
  )
}

export default TimeContextProvider