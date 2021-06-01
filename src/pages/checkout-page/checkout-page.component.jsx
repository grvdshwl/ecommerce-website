import React from "react";

import "./checkout-page.styles.scss";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems,total}) =>(
    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
             <span>
                Product
             </span>
            </div>

            <div className="header-block">
             <span>
                 Description
             </span>
            </div>

            <div className="header-block">
             <span>
                 Quantity
             </span>
            </div>

            <div className="header-block">
             <span>
                 Price
             </span>
            </div>

            <div className="header-block">
             <span>
                 Remove
             </span>
            </div>

        </div>

        {cartItems.length ? cartItems.map((cartItem)=> <CheckoutItem cartItem={cartItem}/>):null}
        <div className="total">
            Total : ${total}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);