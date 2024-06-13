import { Suspense, lazy, React } from 'react';
import Loading from './components/Loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const Home = lazy(() => import("./pages/Home"))
  const About = lazy(() => import("./pages/About"))
  const Films = lazy(() => import("./pages/Films"))
  const Faq = lazy(() => import("./pages/Faq"))
  const Career = lazy(() => import("./pages/Career"))

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Suspense fallback={<Loading />}> <Home /> </Suspense> }></Route>
        <Route exact path='/about' element={ <Suspense fallback={<Loading />}> <About /> </Suspense> }></Route>
        <Route exact path='/films' element={ <Suspense fallback={<Loading />}> <Films /> </Suspense> }></Route>
        <Route exact path='/faq' element={ <Suspense fallback={<Loading />}> <Faq /> </Suspense> }></Route>
        <Route exact path='/career' element={ <Suspense fallback={<Loading />}> <Career /> </Suspense> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
