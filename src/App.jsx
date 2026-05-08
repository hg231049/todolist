import './App.css'
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'
import CounterApp from './pages/CounterApp'
import { useState } from "react";

function App() {

    const [isDark,setIsDark] = useState(false);
    const themHandler = () => {
     setIsDark((prev) => !prev) // 현재 상태의 반대값으로 변경
    }

  return (
   <div className={`fixed inset-0 ${isDark === true ? "darkMode bg-black text-white" : "bg-white text-black"}`}>
      <div className="inner">
        <div className="flex flex-col gap-5">
          <Header themMode={themHandler}/>
          <Main/>
        </div>
      </div>
   </div>
      
  )
}

export default App
