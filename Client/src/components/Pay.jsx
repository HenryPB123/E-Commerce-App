import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51NiqbXB3Q238UXnNLHnks6ZLHHcJhQ82YCJJkqC3gWOJZIsW9Xls0hml4ykAIz8VCruCY1niai6r7VpRM1kbKJnU00rfmM6aNM"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

// import styled from "styled-components";
// import StripeCheckout from "react-stripe-checkout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const KEY_PUBLIC_STRIPE =
//   "pk_test_51NiqbXB3Q238UXnNLHnks6ZLHHcJhQ82YCJJkqC3gWOJZIsW9Xls0hml4ykAIz8VCruCY1niai6r7VpRM1kbKJnU00rfmM6aNM";
// const Container = styled.div`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Button = styled.button`
//   border: none;
//   width: 120;
//   border-radius: 5;
//   padding: 20px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
//   cursor: pointer;
// `;

// const Pay = () => {
//   const [stripeToken, setStripeToken] = useState(null);

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/checkout/payment",
//           {
//             tokenId: stripeToken.id,
//             amount: 2000,
//           }
//         );
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     stripeToken && makeRequest();
//   }, [stripeToken]);

//   return (
//     <Container>
//       <StripeCheckout
//         name="Mahedi Shop"
//         image="https://i.pinimg.com/originals/8b/e3/07/8be30733c47e09d2d59126f418dfd0a2.png"
//         billingAddress
//         shippingAddress
//         description="Your total is $20"
//         amount={2000}
//         token={onToken}
//         stripeKey={KEY_PUBLIC_STRIPE}
//       >
//         <Button>Pay Now</Button>
//       </StripeCheckout>
//     </Container>
//   );
// };

// export default Pay;
