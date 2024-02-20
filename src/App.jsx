import "./App.css"
import { Header } from "./components/Header"
import { Board } from "./components/Board"
import { TrendingGames } from "./components/TrendingGames"
import { TrendingCategories } from "./components/TrendingCategories"

function App () {
    return (
      <>
        <Header />
 
       <main className="main-window">
          <Board />
          <TrendingGames />
          <TrendingCategories />
       </main>
      </>
    )
  }
  
export default App