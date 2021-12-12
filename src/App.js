import './App.css';
import Header from './Components/Header/Header'
import MainBody from './Components/MainBody/MainBody';

let header = Header();
let mainBody = MainBody();

function App() {
  return (
    <div className="root">
      {header}
      {mainBody}
    </div>
  );
}

export default App;