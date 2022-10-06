import React from 'react'
import { useStateContext } from "../context"

const MealDetail = () => {
    const {mealData, dispatch} = useStateContext()
  return (
    <div>MealDetail</div>
  )
}

export default MealDetail