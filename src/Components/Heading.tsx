import React,{memo} from 'react'

interface  HeadingInterface{
 title:string
}

const Heading:React.FC<HeadingInterface> = (props) => {
  const  {title} = props;

  return (
    <div>
      {title}
    </div>
  )
}

export default memo(Heading)