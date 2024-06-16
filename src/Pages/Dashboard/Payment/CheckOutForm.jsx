import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckOutForm = () => {
  const [clientSecret,setClientSecret]=useState('')
  const stripe = useStripe();
  const elements = useElements();
  const [error,setError]=useState('')
  const axiosSecure = useAxiosSecure()
  const [cart] = useCart()
  const totalPrice = cart.reduce((total,item) => total + item.price,0)

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {totalPrice})
    .then(res => {
      setClientSecret(res.data.clientSecret)
    })
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default CheckOutForm;
