import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../js/Responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../js/requestMetod";
import { useNavigate } from "react-router-dom";

const KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "tranparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const ContainerProduct = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  /* width: 250px; */
  width: 250px;
  height: 300px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    marginBottom: "15px",
    marginTop: "0px",
    flexDirection: "row",
    justifyContent: "space-around",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    marginBottom: "0px",
    margin: "10px",
  })}
`;

const ProductAmount = styled.span`
  font-size: 25px;
  margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  padding-top: 40px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "25px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });
        response.data &&
          navigate("/success", {
            state: { data: response.data, products: cart, replace: true },
          });
      } catch {
        (error) => console.log(error);
      }
    };
    stripeToken && cart.totalPrice >= 1 && makeRequest();
  }, [stripeToken, cart.totalPrice, cart, navigate]);

  return (
    <Container>
      <NavBar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopBottom>CONTINUE SHOPPING</TopBottom>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBottom type="filled">CHECKOUT NOW</TopBottom>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((p) => (
              <ContainerProduct key={p._id}>
                <Product key={p._id}>
                  <ProductDetail>
                    <Image src={p.image} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {p.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b> {p._id}
                      </ProductId>

                      <ProductColor color={p.color} />

                      <ProductSize>
                        <b>Size:</b> {p.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddIcon />
                      <ProductAmount>{p.quantity}</ProductAmount>
                      <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice>$ {p.price * p.quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </ContainerProduct>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -20%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Mahedi Shop"
              image="https://i.pinimg.com/originals/8b/e3/07/8be30733c47e09d2d59126f418dfd0a2.png"
              billingAddress
              shippingAddress
              description={`Your total is $ ${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
