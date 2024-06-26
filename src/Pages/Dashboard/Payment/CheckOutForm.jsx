import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [clientSecret,setClientSecret]=useState('')
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError]=useState('')
  const axiosSecure = useAxiosSecure()
  const [cart,refetch] = useCart()
  const totalPrice = cart.reduce((total,item) => total + item.price,0)
  const {user} = useAuth()
  const [transactionId,setTransactionId] = useState('')

  useEffect(()=>{
    if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent', {totalPrice})
    .then(res => {
      setClientSecret(res.data.clientSecret)
    })
    }
  },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }


    // confirm payment
    const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        }
      }
    })

    if(confirmError){
      // console.log('confirm error')
      Swal.fire({
        position: "center",
        icon: "error",
        title: "There Was an error.Try Again Later",
        text: "Make sure you have items in your cart",
        showConfirmButton: false,
        timer: 2500
      });
    }else{
      // console.log('payment intent', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
      }
    }

    // save the payment in db
    const payment = {
      email: user.email,
      price: totalPrice,
      data: new Date(),
      cartId : cart.map(item => item._id),
      menuItemId : cart.map(item => item.menuId),
      status : 'pending',
      transactionId : paymentIntent.id,
    }
    
    const res = await axiosSecure.post('/payments', payment)
    refetch()
    if(res?.data?.paymentResult?.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Payment is Completed",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            className="btn mx-auto mt-5 px-10 bg-orange-400 text-black text-lg"
            type="submit" disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-5 font-medium">{error}</p>}
      {transactionId && <p className=" mt-5 font-medium">Transaction ID : <span className="text-green-600 font-semibold">{transactionId}</span> </p>}
    </div>
  );
};

export default CheckOutForm;
