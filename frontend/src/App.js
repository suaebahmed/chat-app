import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/chats" component={Chatpage} />
      </Routes>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
