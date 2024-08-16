import './App.css'
import ForumInfo from './components/ForumInfo'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Intro from './components/Intro'
import Program from './components/Program'
import Speakers from './components/Speakers'
import Sponsor from './components/Sponsors'

function App() {

  return (
    <div id='page'>
      <Header />
      <Intro />
      <ForumInfo />
      <Speakers />
      <Sponsor />
      <Gallery />
      <Program /> 
    </div>
  )
}

export default App
