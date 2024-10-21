

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Component/Details';
import FirstPage from './Component/FirstPage';
import FeedbackPage from './Pages/Feedback';
import Error from './Pages/Error';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/Details' element={<Details />} />
        <Route path='/feedback' element={<FeedbackPage/>}/>
        <Route path='/Login' element={<Login/>}/>

        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}
export default App;