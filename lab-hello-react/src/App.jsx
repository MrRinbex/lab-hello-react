// src/App.js
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
function App() {
  const firstP = "say hello to ReactJS"
  const secondP = "you will learn how to you use the most popular frontend library, and become a super Ninja developer"
  return (
    <div className="App">    
    <div className='top'>
      <img src={logo} alt="logo"/>
      <img src={menu} alt="menu-top"/>
    </div>
    <div className='App-header'>
      <p className='firstP'>{firstP}</p>
      <p className='secondP'>{secondP}</p>
      <button>Awesome</button>
    </div>
    <div className='footer'>
      <div className='item'>
      <img src={icon1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className='item'>
      <img src={icon2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated Components that manage their state</p>
      </div>

      <div className='item'>
      <img src={icon3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the Component's</p>
      </div>

      <div className='item'>
      <img src={icon4} alt="" />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers</p>
      </div>
    </div>
    </div>
    
  );
}
export default App;