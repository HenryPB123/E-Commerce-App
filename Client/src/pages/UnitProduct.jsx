import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
// MUI
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  align-items: center;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const UnitProduct = () => {
  return (
    <Container>
      <NavBar />
      <Announcements />

      <Wrapper>
        <ImgContainer>
          <Image src="https://www.plicata.com.co/wp-content/uploads/2022/03/Jeans-Roto-Mujer-Desgaste-Moda-Dama-Rigido-Plicata-scaled.gif" />
        </ImgContainer>
        <InfoContainer>
          <Title>New Jeans</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            dignissimos ipsa officia nam commodi, ipsum sapiente quo sunt dolore
            animi doloremque, repellat veniam laboriosam aut autem nihil
            consectetur numquam sequi.
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>2</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default UnitProduct;
