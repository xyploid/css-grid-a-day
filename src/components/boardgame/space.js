import React from "react"
import SpaceStyles from "./board.module.scss"

function Space(props) {
  return (
    <div className={`${SpaceStyles.space} ${SpaceStyles[props.position]}`}>
      <div
        className={`${SpaceStyles.colour}`}
        style={{ backgroundColor: props.color }}
      />
      <div className={`${SpaceStyles.label}`}>
        <div>{props.children}</div>
      </div>
      <div className={`${SpaceStyles.price}`}>{props.price}</div>
    </div>
  )
}
export default Space
