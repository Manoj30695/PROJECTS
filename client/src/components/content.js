import { Button, ButtonBase, IconButton } from "@material-ui/core";
import { StepButton, ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";
import img from '../pages/Images/Homepic.png';
import Ser from '../pages/Images/Services.jpg';
import Ord from '../pages/Images/Orders.png';
import Pay from '../pages/Images/Payments.png';
import Hel from '../pages/Images/help1.png';
import Fed from '../pages/Images/fdback1.jpg';
const content = [
    {
      id: 1,
      emoji: <center><img src={img} width='200' height='120' /></center>,
      back:<center><IconButton><Link to='/Home'>Home</Link></IconButton></center>
        
    },
    {
      id: 2,
      emoji:  <center><img src={Ser} width='200' height='120' /></center>,
      back:<center><IconButton><Link to='/Services'>Services</Link></IconButton></center>
        
    },
    {
      id: 3,
      emoji: <center><img src={Ord} width='200' height='120' /></center>,
      back:<center><IconButton><Link to='/Orders'>My Orders</Link></IconButton></center>
        
    },
    {
      id: 4,
      emoji: <center><img src={Pay} width='200' height='120' /></center>,
      back:<center><IconButton><Link to='/Payments'>Payments</Link></IconButton></center>
        
    },
    {
      id: 5,
      emoji:<center><img src={Hel} width='200' height='120' /></center>,
      back:<center><IconButton><Link to='/Help'>Help</Link></IconButton></center>
    },
    {
      id: 6,
      emoji: <center><img src={Fed} width='200' height='150' /></center>,
      back:<center><IconButton><Link to='/Feedback'>Feedback</Link></IconButton></center>
    }
        
  ];
  
  export default content;