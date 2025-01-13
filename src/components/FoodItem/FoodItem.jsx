import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContex'
const FoodItem = ({id,name,price,description,image}) => {

  // const [itemCount,setItemCount] =useState(0)
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
    <div className='food-item'>{/* this is like everything each food item will have an image a descrption , a rating.....*/}
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {/*if our food item count is zero then provide one add button if not provide one counter */}
            {!cartItems[id] /*itemcount is not zero then add image tag */
               ?<img className='add' onClick={()=>addToCart(id)} /*setItemCount(prev=>prev+1) */ src={assets.add_icon_white} alt="" />
               :<div className='food-item-counter'>
                   <img onClick={()=>removeFromCart(id)} /*setItemCount(prev=>prev-1) */  src={assets.remove_icon_red} alt="" />
                   <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green}alt="" />
               </div>
             } 
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                 <p>{name}</p> 
                 <img src={assets.rating_starts} alt="" />
            </div> 
            <p className="food-item-desc">{description}</p> 
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem