import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-[1320px] mx-auto my-8'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}

export default App
