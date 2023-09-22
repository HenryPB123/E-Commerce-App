import styled from "styled-components";
import { categories } from "../js/data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../js/Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.id} item={category} />
        ))}
    </Container>
  );
};

export default Categories;
