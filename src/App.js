import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import {Provider} from 'react-redux'
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className=''>
        <Head/>
        <Body/>


        {/* 
        
        - head
        -body
        - sidebar
          - menulist
        menuContainer
          - buttonlist
          - videoContainer
          - videoCard


          */}
      </div>
    </Provider>
  );
}

export default App;
