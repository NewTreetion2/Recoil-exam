import './App.css';
import {
  RecoilRoot,
} from 'recoil';
import Header from './Header/Header';
import NumberSpace from './NumberSpace/NumberSpace';

function App() {
  return(
  <RecoilRoot>
   <Header />
   <NumberSpace />
  </RecoilRoot>
  );
}

export default App;
