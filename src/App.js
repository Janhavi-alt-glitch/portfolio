import './App.css';
import Navigation  from './components/navigation.js'
import Home  from './components/home.js'
import  Skills from './components/skills.js'
import Contact  from './components/contact.js'
import  Work  from './components/work.js'
import  Footer from './components/footer.js'

import{Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='work' element={<Work/>}/>
          <Route path='contact' element={<Contact/>}/>
          </Routes>
    <Footer/>  
    </div>
  );
}

export default App;
