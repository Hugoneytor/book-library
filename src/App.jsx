import React from 'react'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Create from './pages/Create';
import Index from './pages/Index';
import View from './pages/View';
import Store from './store/Store';

const App = () => {
  return (
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Index />} />
            <Route path='create' element={ <Create />} />
            <Route path='view/:bookId' element={ <View />} />
            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
        </BrowserRouter>
      </Store>
  )
}

export default App