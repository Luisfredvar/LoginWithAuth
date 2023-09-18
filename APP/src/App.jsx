import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import NewFormPage from './pages/newFormPage';
import ProfilePage from './pages/profilePage';








function App() {
  return (
    <>
   
      <BrowserRouter>
          <Routes>
          {/* rutas publicas */}

            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPage/>}></Route>
            <Route path='/tasks' element={<TaskPage/>}></Route>
            <Route path='/taskform' element={<NewFormPage/>}></Route>
            <Route path='/editTask/:id' element={<NewFormPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            
            
          </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default App
