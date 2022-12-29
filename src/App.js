import './App.css';
import {
  RecoilRoot,
} from 'recoil';
import Header from './Header/Header';
import NumberSpace from './NumberSpace/NumberSpace';
import { Route, Routes } from 'react-router-dom';
import SecondProject from './Second_project/SecondProject';

function App() {
  return(
  <RecoilRoot>
    <Routes>
      <Route path='/' element={<>
      <Header />
      <NumberSpace />
      </>}></Route>
      <Route path='/second_project' element={<>
      <SecondProject />
      </>}></Route>
    </Routes>
  </RecoilRoot>
  );
}

export default App;
