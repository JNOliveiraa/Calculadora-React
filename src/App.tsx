import "./App.css"

import {Button} from "./components/Button"
import {Screen} from "./components/Screen"


export default function App () {

const buttons = [
  "C", "+/-", "/", "+",

  "7", "8", "9", "-",

  "4", "5", "6", "x",

  "1", "2", "3", "=",

  "0", "."
]

  return (
    <div className="calculator">
       <Screen previousValue="145 + 23" 
       currentValue="168"/> 

        <div className="buttons">
          {buttons.map((btn, index) =>{
            
            let extraClass = ""

            if (btn === "0") extraClass = "span-2"
            if (btn === "=") extraClass = "equal"

            if (btn === "C") extraClass = "color"
            if (btn === "+") extraClass = "color"
            if (btn === "+/-") extraClass = "color"
            if (btn === "/") extraClass = "color"
            if (btn === "-") extraClass = "color" 
            if (btn === "x") extraClass = "color"
      
            return (

                <Button key={index} className= {`btn ${extraClass}`}> 
                
                {btn} 

               </Button> 
            )
              
              
              
            })}
            </div>      
            
            </div>
          )
}