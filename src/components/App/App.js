import "./App.css";
import Profile from "../Profile/Profile";
import  PreviewText from '../PreviewText/PreviewText'
// import Login from "../Login/Login";
import Header from "../Header/Header";
import ChangeColor from "../ChangeColor/ChangeColor";
import ColorChart from "../ColorChart/ColorChart";
// import {colorChart} from '../../images/css_colors.png' 
function App() {
  return (
    <main>
      <Header />
      <div className='App'>
            {/* <Login /> */}
            <div className="inputs-container">
            <PreviewText />
          <ChangeColor />

            </div>
            <Profile />
            <ColorChart /> 
     

      </div>
    </main>
  );
}

export default App;
