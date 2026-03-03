import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'
import LudoBoard from './LudoBoard'
import Ticket from './Ticket'
import TodoList from './TodoList'


function App() {

 let winCondition = (ticket) => {
  return ticket[0] === 0;
 }

 return (
    <>
     <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
