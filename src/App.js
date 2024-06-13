import { Suspense, lazy, React } from 'react';
import Loading from './components/Loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const Home = lazy(() => import("./pages/Home"))
  const About = lazy(() => import("./pages/About"))
  const News = lazy(() => import("./pages/News"))
  const Faq = lazy(() => import("./pages/Faq"))
  const Career = lazy(() => import("./pages/Career"))
  const NewsDetail = lazy(() => import("./pages/NewsDetail"))

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Suspense fallback={<Loading />}> <Home /> </Suspense> }></Route>
        <Route exact path='/about' element={ <Suspense fallback={<Loading />}> <About /> </Suspense> }></Route>
        <Route exact path='/news' element={ <Suspense fallback={<Loading />}> <News /> </Suspense> }></Route>
        <Route exact path='/news/:id' element={ <Suspense fallback={<Loading />}> <NewsDetail /> </Suspense> }></Route>
        <Route exact path='/faq' element={ <Suspense fallback={<Loading />}> <Faq /> </Suspense> }></Route>
        <Route exact path='/career' element={ <Suspense fallback={<Loading />}> <Career /> </Suspense> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
