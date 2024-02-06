import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Help() {
  return (
    <center>
    <div className='Help'>
<h1> HELP </h1>
<TextField id="filled-basic" label="Ask a question" variant="filled" />  
<span> </span>
<Button variant="contained"> Post Question </Button>
<h3>  Contact us </h3>
<h4>  E-mail : homeshelpers@gmail.com </h4>
<h4>  Customer service : 8639686275 </h4>
<h4>   Address :</h4>
<h5>  KL University <br/>
      Vaddeswaram <br/>
      Guntur Dist. 
   </h5>
    </div>
    </center>
  )
}

export default Help;