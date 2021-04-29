import {FloatingButton as FloatingButtonInterface} from '../types'

const labelFromAction = (action: FloatingButtonInterface["action"]) => {
  switch (action) {
    case '':
  }
}

export default function FloatingButton (props) {
  const {label, color, icon} = labelFromAction(props.action)
  
  return (

  )
}