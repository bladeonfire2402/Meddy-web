import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, Medicines, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  
  const totalPrice=getTotalCartAmount()
  

  if (totalPrice<=0) {
    return <div className='flex justify-center pb-16 '>
      <div className='wrapper flex justify-center flex-col items-center'>
        <img src='https://nhathuoclongchau.com.vn/estore-images/cart/illustration-cart-empty.png' className='w-1/3'/>
        <h1 className='font-semibold text-xl'>Chưa có sản phẩm nào trong giỏ hàng</h1>
        <p className='text-center font-light text-gray-500'>Cùng khám phá hàng ngàn sản phẩm <br/> tại Nhà thuốc Meddy nhé</p>
        <Link to={"/shop"}>
        <button className='px-5 py-2 text-white bg-blue-600 mt-5 rounded-3xl'>Khám phá ngay</button>
        </Link>
        <div className='w-full mt-5'>
          <h1 className='font-semibold text-xl'>Sản phẩm vừa xem</h1>
        </div>
      </div>
    </div>;
  }
  return (
    <div className='cart flex justify-center py-32'>
      <div className='wrapper'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {Medicines.map((item) => {
          if (cartItems[item.Med_ID] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-item'>
                  <img src={item.img} alt={item.Name} />
                  <p>{item.Name}</p>
                  <p>${item.Price}</p>
                  <p>{cartItems[item.Med_ID]}</p>
                  <p>${item.Price * cartItems[item.Med_ID]}</p>
                  <p onClick={() => removeFromCart(item.Med_ID)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2000} VND</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount() + 2000} VND</b> 
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nhập mã giảm giá ở đây</p>
            <div className="cart-promoto-input">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cart;
