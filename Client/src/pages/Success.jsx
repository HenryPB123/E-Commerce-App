import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../js/requestMetod";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
  line-height: 60px;
`;

const Button = styled.button`
  font-size: 30px;
  padding: 20px;
  margin-top: 20;
  border: 1px solid gray;
  border-radius: 20px;
`;

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.data;
  // const cart = location.state.cart;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await userRequest.post("orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.totalPrice,
          address: data.billing_details.address,
        });

        setOrderId(response.data._id);
      } catch {
        (error) => console.log(error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <Container>
      {orderId ? (
        <Message>
          Order has been created successfully. Your order number is: {orderId}
        </Message>
      ) : (
        <Message>Successfull. Your order is being prepared...</Message>
      )}
      <Link to={"/"}>
        <Button>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default Success;
