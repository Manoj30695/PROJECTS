import React from 'react'
import './Checkout.css'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Checkout() {
    const [orderfirstName,setfirstName]=useState("");
  const [orderlastName,setlastName]=useState("");
  const [orderphoneno,setphoneno]=useState("");
  const [orderemail,setemail]=useState("");
  const [orderaddress,setaddress]=useState("");
  const [ordercity,setcity]=useState("");
  const [orderstate,setstate]=useState("");
  const [ordercode,setcode]=useState("");
  const [orderList,setOrderList]=useState([]);
useEffect(()=>{
    axios.get("/display").then((response)=>{
      setOrderList(response.data);
    })
  },[]);
  const addToList=()=>{   
    axios.post("/newstud",{orderfirstName:orderfirstName, orderlastName:orderlastName,orderphoneno:orderphoneno,orderemail:orderemail,
    orderaddress:orderaddress,ordercity:ordercity,orderstate:orderstate,ordercode:ordercode});
    console.log(orderfirstName,orderlastName,orderphoneno,orderemail,orderaddress,ordercity,orderstate,ordercode);
  }
  return (
    <div className='App'>
        <div className="py-3 bg-warning">
                <div className="container">
                    <h6></h6>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">

<div className="col-md-7">
    <div className="card">
        <div className="card-header">
            <h4>Order Details </h4>
        </div>
        <div className="card-body">

            <div className="row">
                    

                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> First Name</label>
                        <input type="text" onChange={(event)=>setfirstName(event.target.value)} name="firstname" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Last Name</label>
                        <input type="text" onChange={(event)=>setlastName(event.target.value)} name="lastname" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Phone Number</label>
                        <input type="text"onChange={(event)=>setphoneno(event.target.value)}  name="phone" className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label> Email Address</label>
                        <input type="text" onChange={(event)=>setemail(event.target.value)} name="email"  className="form-control" />
                      
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-3">
                        <label> Full Address</label>
                        <textarea rows="3" onChange={(event)=>setaddress(event.target.value)} name="address" className="form-control"></textarea>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-3">
                        <label>City</label>
                        <input type="text" onChange={(event)=>setcity(event.target.value)} name="city" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group mb-3">
                        <label>State</label>
                        <input type="text" onChange={(event)=>setstate(event.target.value)} name="state" className="form-control" />
                    </div>
                </div>
                <div className="col-md-4">
                <div className="form-group mb-3"></div>
                    <label>Zip Code</label>
                        <input type="text" onChange={(event)=>setcode(event.target.value)} name="zipcode" className="form-control" />
                    </div>
                </div>
            </div>

        </div>
    </div>

    </div></div></div>
 <button onClick={addToList}>Show order Details</button>
    <h1>ORDERS List</h1>
    {orderList.map((val,key)=>{
  return <div key={key} class="student">
    <h4>{val.firstname}</h4>
    <h4>{val.lastname}</h4>
    <h4>{val.phoneno}</h4>
    <h4>{val.email}</h4>
    <h4>{val.Address}</h4>
    <h4>{val.city}</h4>
    <h4>{val.state}</h4>
    <h4>{val.code}</h4>
  </div>
  })}
    <Link to="/Payments">
          <button>Place Order</button>
        </Link>
  </div>
  );
}

export default Checkout