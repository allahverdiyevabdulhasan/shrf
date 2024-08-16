import './App.css'
import ForumInfo from './components/ForumInfo'
import Header from './components/Header'
import Intro from './components/Intro'
import Speakers from './components/Speakers'

function App() {

  return (
    <div id='page'>
      <Header />
      <Intro />
      <ForumInfo />
      <Speakers />
    </div>
  )
}

export default App
