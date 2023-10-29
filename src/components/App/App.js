import "./App.css";
import Profile from "../Profile/Profile";
import  PreviewText from '../PreviewText/PreviewText'
// import Login from "../Login/Login";
import Header from "../Header/Header";
import ChangeColor from "../ChangeColor/ChangeColor";
import {colorChart} from '../../images/css_colors.png' 
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
          <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1627409580379/19ZqK8fGv.png" alt="chart of 161 css color names"></img>
     

      </div>
    </main>
  );
}

export default App;
