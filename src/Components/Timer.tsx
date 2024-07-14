import React,{useCallback, useContext, useRef} from 'react'

import TimeContext from '../Context/TimeContext'
import Heading from './Heading';
import Button from './Button';
import Hand from './Hand';

type ValueType = {
  value : number
}
const Hours : React.FC<ValueType> = (props)=>{
  const {value} = props
  return (<>
    <Hand type={'HOUR'}  value={value}></Hand>
  </>)
}

const Minutes:React.FC<ValueType> = (props)=>{
  const {value} = props
  return <>
    <Hand type={'MINUTES'}  value={value}></Hand>
  </>
}

const Seconds : React.FC<ValueType> = (props)=>{
  const {value} = props
  return <>
    <Hand type={'SECONDS'}  value={value}></Hand>
  </>
}



const Timer:React.FC = () => {

  const timerContext = useContext(TimeContext);
  let clockId: React.MutableRefObject<number>  =  useRef(-1)
  const startTimer = useCallback(()=>{
      const hrs : number  = timerContext?.time.hours || 0
      const mins: number  = timerContext?.time.minutes || 0
      const secs:number   = timerContext?.time.seconds || 0

      let totalSecs:number = (hrs * 60 * 60)  +  (mins * 60)  + (secs)

        clockId.current = setInterval(()=>{
          totalSecs--
          if (totalSecs<=0){
            stopTimer()
          }else{
            timerContext?.setTime({
              hours :Math.floor(totalSecs / 3600),
              minutes : Math.floor((totalSecs % 3600 ) / 60 ),
              seconds : Math.floor(totalSecs % 60)

            })
          }
      },1000)


  },[timerContext])


  const stopTimer = useCallback(()=>{
    clearInterval(clockId.current)
  },[])

  const resetTimer = useCallback(()=>{
    clearInterval(clockId.current)
    timerContext?.setTime({
      hours:0,minutes:0,seconds:0
    })
  },[timerContext])

  return (
    <div>
      <Heading title={'COUNT DOWN TIMER'}></Heading>
      <div>
        <Hours value= {timerContext?.time.hours || 0}></Hours>
        <Minutes value={timerContext?.time.minutes || 0}></Minutes>
        <Seconds value={timerContext?.time.seconds || 0 }></Seconds>
      </div>
      <div>
        <Button text='Start' handleClick={startTimer}></Button>
        <Button text ='Stop' handleClick={stopTimer}></Button>
        <Button text='Reset' handleClick={resetTimer}></Button>
      </div>
    </div>
  )
}

export default Timer