
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Naxtpage from './pages/Naxtpage'

function App() {
  const love = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/Naxtpage' element={<Naxtpage/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={love}/>
      
    </>
  )
}

export default App
