import './App.css'
import HeroPage from './Components/HeroPage'
import HeroPage2 from './Components/HeroPage2'
import HowItWorksPage from './Components/HowItWorksPage'
import Navbar from './Components/Navbar'
import TrustedByPage from './Components/TrustedByPage'
import TryItOutPage from './Components/TryItOutPage'

function App() {

  return (
    <main className='flex flex-col'>
      <Navbar/>
      <HeroPage/>
      <HeroPage2/>
      <TrustedByPage/>
      <TryItOutPage/>
      <HowItWorksPage/>
    </main>
  )
}

export default App
