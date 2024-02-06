import React from 'react'
import * as AiIcons from "react-icons/ai"; 
export const SidebarData = [
    {
        title:'Home',
        path:'/Home',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Services',
        path:'/Services',
        icon:<AiIcons.AiFillSetting/>,
        cName:'nav-text'
    },
    {
        title:'Orders',
        path:'/Orders',
        icon:<AiIcons.AiOutlineShoppingCart/>,
        cName:'nav-text'
    },
    
    {
        title:'Payments',
        path:'/Payments',
        icon:<AiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:'Help',
        path:'/Help',
        icon:<AiIcons.AiOutlineUser/>,
        cName:'nav-text'
    },
]