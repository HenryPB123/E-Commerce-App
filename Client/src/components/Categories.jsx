import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div``;

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
