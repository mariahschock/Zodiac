import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { zodiac } from './data';

{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      
  
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header name="Mariah" />
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year="2022" />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main zodiacs={zodiac} />
    </div>
  );
}

export default App;
