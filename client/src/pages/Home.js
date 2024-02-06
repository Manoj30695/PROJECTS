import React from "react";
import e from '../pages/Images/e.jpg';
import Grid from '@mui/material/Grid';
import '../App.css';
  function Home() {
const Home = [ {
  "img":<img src={e} width={700} height={400}/>,
  displayName: "Laundry Services",
  description: "In present scenario , people are buried up in a work culture,as everyone is engaged with busy schedules and hectic tasks It is important to manage both professional and family  life. In such circumstances, every one of us would have fantasized about a kind of house  which doesn’t have any repairs in their electronic appliances, and a kind of house which  never face any maintenance issues and every one of us have thought that a life would be much better if no point of issue arises in getting a service at your door step .  In such situation’s E-Commerce plays a vital role in today’s life as it has so many advantages in our   life because it makes convenient in daily life of the people.",
  servicesOffered:[
    "Laundry Service",<br/>,
    "Iron Service",
      
   
  ]
}
]
    return (
    <div>
   <center>
   <div class="Home">
      
      <Grid  container justifyContent="center" spacing={2}>
                  { Home.map((m)=>(<Grid item>
                    
                    
                    {m.img}<br/>
                       <h2><br/>{m.displayName}<br/></h2>
                       <h2>{m.description}<br/>SERVICES OFFERED:<br/>{m.servicesOffered}<br/></h2>
                       
                  </Grid>))}
              </Grid>
        </div></center> 
    </div>
  )
}
export default Home;