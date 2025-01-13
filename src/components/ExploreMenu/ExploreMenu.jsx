import React from 'react'
import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>choose from a diverse menu featuring a delectable array of dishes.our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time</p>
    <div className="explore-menu-list">
       {/*we will render the menu-list using the map methos */ } 
       {menu_list.map((item,index)=>{      /* firts carly braces is due tojsx like js code must be wrapped in braces, while second one is due to the multiline*/
         return (
            <div onClick={()=>setCategory(prev=>prev===item.display_name?"All":item.display_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.display_name? "active":""} src={item.display_image} alt="" />
                    <p>{item.menu_name}</p>
            </div>
         )
       })}
    </div>
    <hr />
 </div>
  )
}

export default ExploreMenu

