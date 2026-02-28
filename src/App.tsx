import "./App.css"

import { useState } from "react"

import {Button} from "./components/Button"
import {Screen} from "./components/Screen"


export default function App () {

  const [currentValue, setCurrentValue] = useState("")

  function handleClick(value: string) {

    
    if (value === "C") {
      setCurrentValue((prev) => prev.slice(0, -1))
      return
    }
    if (value === "=") {
      
      try {
        const result = eval (currentValue.replace("x", "*"))
        setCurrentValue(String(result))
      } catch {
        setCurrentValue("Error")
      }
      return
      
    }
    
    if (value === "cc") {
      setCurrentValue("")
      return
    }
    
  const operators = ["+", "-", "x", "/"]

  if (operators.includes(value)) {
    const lastChar = currentValue.slice(-1)
    
    if (operators.includes(lastChar)) {
        return
      }
    }  
    
  setCurrentValue((prev) => prev + value)
  }

  const buttons = [
   "C", "cc", "/", "+",

   "7", "8", "9", "-",

    "4", "5", "6", "x",

   "1", "2", "3", "=",

  "0", "."
  ]



  return (
    <div className="calculator">
       <Screen 
        previousValue="" 
        currentValue= {currentValue}/> 

        <div className="buttons">
          {buttons.map((btn, index) =>{
            
            let extraClass = ""

            if (btn === "0") extraClass = "span-2"
            if (btn === "=") extraClass = "equal"

            if (btn === "C") extraClass = "color"
            if (btn === "+") extraClass = "color"
            if (btn === "cc") extraClass = "color"
            if (btn === "/") extraClass = "color"
            if (btn === "-") extraClass = "color" 
            if (btn === "x") extraClass = "color"
      
            return (

                <Button 
                key={index} 
                className= {`btn ${extraClass}`}
                onClick={() => handleClick(btn)}
                >
                {btn} 
               </Button> 
            )
              
              
              
            })}
            </div>      
            
            </div>
          )
}