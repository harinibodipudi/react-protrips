import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent.jsx'
import AddTrips from './components/AddTrips.jsx'
function App() {
  return (
    <div className="App">
      <button onClick={()=>{
<HomeComponent/>
      }}>home</button>
      <button onClick={()=>{<AddTrips/>}}>Addtrip</button>
      <AddTrips/>
    </div>
  );
}

export default App;
