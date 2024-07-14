import React,{memo} from 'react'


interface ButtonInterface {
  text: string,
  handleClick:()=>void
}

const Button:React.FC<ButtonInterface> = (props) => {
  const { text , handleClick }= props
  return (
    <button style={{margin:12}} onClick = {handleClick}>
      {text}
    </button>
  )
}

export default memo(Button)