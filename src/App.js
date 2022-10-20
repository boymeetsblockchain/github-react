import {Routes, Route} from 'react-router-dom'
import { GithubProvider } from './context/Github/GithubContext';
import { AlertProvider } from './context/Alert/AlertContext';
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import Alert from "./components/Layout/Alert"
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from './Pages/User';
import Notfound from "./Pages/Notfound";


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      < div className="flex flex-col justify-between h-screen">
       <Navbar/>
       <main className="container mx-auto px-3 pb-12">
        <Alert/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:login' element={<User/>}/>
          <Route path='/notfound' element={<Notfound/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
       </main>
       <Footer/>
      </div>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App