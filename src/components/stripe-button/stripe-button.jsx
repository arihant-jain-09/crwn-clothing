import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
const StripeCheckoutButton=({price})=>{
  const stripeprice=price*100;
  const publishkey='pk_test_51IEYd8KOecIy1LyGh4HL31MLl2Bj6I2DZP4cl5dONXGje65sSJbZeO0cyOIMT1stnUSWH6R1y7YxpoV1Urfpw1dn00SEmu6tgN'
  const onToken=(token)=>{
    console.log(token);
    alert('Payment Successful');
  }
  return <StripeCheckout
    label='Pay Now'
    name="crwn clothing"
    billingAddress
    shippingAddress
    allowRememberMe
    stripeKey={publishkey}
    amount={stripeprice}
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    panelLabel='Pay Now'
    token={onToken}
  />
}
export default StripeCheckoutButton;
