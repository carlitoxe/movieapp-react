import { useState } from 'react'
import './App.css'
import { ScrollToTop } from './hooks/ScrollToTop';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { TrendingPage } from './routes/TrendingPage';
import { MoviePage } from './routes/MoviePage';
import { CategoryPage } from './routes/CategoryPage';
import { SearchPage } from './routes/SearchPage';
import { Header } from './components/Header';
import { HeaderLeft } from './components/HeaderLeft';
import { HeaderRight } from './components/HeaderRight';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  // useScrollToTop();
  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <HashRouter>
        {/* <Header>
                  <HeaderLeft />
                  <HeaderRight />
          </Header> */}
          <ScrollToTop />
          <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/trends' element={<TrendingPage />}/>
            <Route path='/movie/:id' element={<MoviePage />}/>
            <Route path='/category/:id/:name' element={<CategoryPage />}/> 
            <Route path='/results' element={<SearchPage />}/>
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </HashRouter>
      </SkeletonTheme>
    </>
  )
}

export default App
