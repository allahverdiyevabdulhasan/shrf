import './App.css'
import ForumInfo from './components/ForumInfo'
import Header from './components/Header'
import Intro from './components/Intro'
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
    </div>
  )
}

export default App
