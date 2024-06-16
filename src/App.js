import { Suspense, lazy, React } from 'react';
import Loading from './components/Loading'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './utils/ScrollTop';

function App() {
  const Home = lazy(() => import("./pages/Home"))
  const About = lazy(() => import("./pages/About"))
  const Films = lazy(() => import("./pages/Films"))
  const Faq = lazy(() => import("./pages/Faq"))
  const Detail = lazy(() => import("./pages/Detail"))

  return (
    <BrowserRouter>
    <ScrollTop />
      <Routes>
        <Route exact path='/' element={ <Suspense fallback={<Loading />}> <Home /> </Suspense> }></Route>
        <Route exact path='/about' element={ <Suspense fallback={<Loading />}> <About /> </Suspense> }></Route>
        <Route exact path='/films' element={ <Suspense fallback={<Loading />}> <Films /> </Suspense> }></Route>
        <Route exact path='/faqs' element={ <Suspense fallback={<Loading />}> <Faq /> </Suspense> }></Route>
        <Route exact path='/detail' element={ <Suspense fallback={<Loading />}> <Detail /> </Suspense> }></Route>

        <Route path='*' element={
          <div className='flex overflow-hidden justify-center h-[100vh] items-center'>
            404
          </div>
        }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
