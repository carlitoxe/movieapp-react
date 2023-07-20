import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './routes/HomePage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/category' element={<TrendingPage />}/>
          <Route path='/category' element={<SearchPage />}/>
          <Route path='/category' element={<MoviePage />}/>
          <Route path='/category' element={<CategoryPage />}/> */}
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
