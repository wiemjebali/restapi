import './App.css';
import AddContact from './Components/AddContact';
import ListContacts from './Components/ListContacts';
import {Routes, Route} from "react-router"

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<ListContacts/>} />
        <Route path="/addContact" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
