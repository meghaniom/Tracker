import Balance from "./components/Balance"
import IncormeExport from "./components/IncormeExport"
import NewTrainsition from "./components/NewTrainsition"
import Transition from "./components/Transition"
import Header from "./Header"
import './App.css'
import { GlobalProvider } from "./context/GlobalState"




function App() {
  
  return (
    <GlobalProvider  >
      <Header/>
        <div className="container">
          <Balance/>
          <IncormeExport/>
          <Transition/>
          <NewTrainsition/>
        </div>
    </GlobalProvider>
  )
}

export default App
