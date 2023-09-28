import styled from "styled-components";
import { mobile } from "../js/Responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/userRedux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/fotos-premium/mostrar-pulgares-arriba-abajo-es-dificil-elegir-concepto_1187-265541.jpg?w=2000");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  color: gray;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: crimson;
  margin: 5px;
`;
// const ButtonError = styled.button`
//   margin: 5px;
//   border: none;
//   border-radius: 5px;
//   background-color: lightgray;
//   color: red;
//   cursor: pointer;
// `;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && (
            <Error onClick={() => (error = false)}>
              Something went wrong...
            </Error>
          )}
          {/* <ButtonError>X</ButtonError> */}
          <Link>DO NOT REMEMBER YOUR THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
