import { BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './user/pages/User'
import NewPlaces from './places/pages/NewPlaces'
import  MainNavigation from './shared/componenets/Navigation/MainNavigation'


const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/places" element={<NewPlaces />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App