import React ,{memo} from 'react'

interface HandInterface { 
  type:string,
  value : number
 }

const Hand:React.FC<HandInterface> = (props) => {
  const { type ,value  } = props
  return (
    <div>
      <div>
        <div>
          {type}
        </div>
        <div>
          {value}
        </div>
      </div>
    </div>
  )
}

export default memo(Hand)