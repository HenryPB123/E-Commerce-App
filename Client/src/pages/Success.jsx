import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../js/requestMetod";
import styled from "styled-components";

const Container = styled.div`
  height: "100vh";
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  justify-content: "center";
`;

const Button = styled.button`
  padding: 10;
  margin-top: 20;
`;

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  console.log("locationnnnn", location.state.data);
  const data = location.state.data;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {
        (error) => console.log(error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Button>Go to Homepage</Button>
    </Container>
  );
};

export default Success;