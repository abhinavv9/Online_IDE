import './App.css';
import Header from './components/Header/Header';
import { Provider } from 'react-redux'
import Generator from './components/Openai/generator';
import EditorHandler from './components/editor/langEditor/EditorHandler';
import store from './Redux/Store';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
      <div>
       <EditorHandler />
      </div>
      {/* <div>
        <Generator />
      </div> */}
    </Provider>
  );
}

export default App;
