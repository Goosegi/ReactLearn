import './App.css';
import Header from './components/header.jsx';
import Nav from './components/navBar.jsx';
import Profile from './components/profile.jsx';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
