import './App.css';
import  ShoppingBasket  from '@material-ui/icons/ShoppingBasket';

function App() {
  return (
    <div className='App'>
        <div className='header_log'></div> 
        <div className="temporary"></div>
        <div className="header_search"></div>
        <div className="header_nav">
          <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineOne">SignIn</span>
            </div>
          <div className="nav_item">
            <span className="nav_itemLineOne">Your </span>
            <span className="nav_itemLineOne">Shop</span>
          </div>
          <div className="nav_item">
            <span className="nav_itemLineOne">
              <ShoppingBasket fontSize="large"/>
              </span>
            <span className="nav_itemLineOne">0</span>
          </div>
        </div>
    </div>
  );
}

export default App;
