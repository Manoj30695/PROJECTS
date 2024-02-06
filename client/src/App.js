import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from '../src/pages/Home'
import Orders from '../src/pages/Orders'
import Services from '../src/pages/Services'
import Payments from '../src/pages/Payments';
import Navbar from '../src/pages/Navbar';
import Checkout from '../src/pages/Checkout';
import Help from "../src/pages/Help";
import Feedback from '../src/pages/Feedback';
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={< Main/>} />}
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		
			<Route path='Help' element={<Help/>}/>
			<Route path='Home' element={<Home/>}/>
          <Route path='Payments' element={<Payments/>}/>
  <Route path='Services' element={<Services/>}/>
  <Route path='Orders' element={<Orders/>}/>
  <Route path='Navbar' element={<Navbar/>}/>
  <Route path='Feedback' element={<Feedback/>}/>
  <Route path="/Checkout" element={<Checkout />}></Route>
			
		</Routes>
	);
}

export default App;
